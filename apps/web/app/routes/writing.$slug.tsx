// ABOUTME: Dynamic article page that renders MDX content by slug.
// ABOUTME: Loads the article component and frontmatter, wraps in MdxLayout.

import { json } from '@remix-run/node';
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useParams } from '@remix-run/react';
import { PageContainer } from '~/components/layout';
import { MdxLayout } from '~/components/mdx-layout';
import { getArticleBySlug, getArticleFrontmatterBySlug } from '~/lib/articles';
import { buildMeta } from '~/lib/seo';

export function loader({ params }: LoaderFunctionArgs) {
  const frontmatter = params.slug ? getArticleFrontmatterBySlug(params.slug) : null;

  return json({ frontmatter });
}

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data?.frontmatter) {
    return buildMeta({
      title: 'Not Found',
      description: "This article doesn't exist or hasn't been published yet.",
      path: `/writing/${params.slug ?? ''}`,
    });
  }

  const { title, summary, date } = data.frontmatter;
  return buildMeta({
    title,
    description: summary,
    path: `/writing/${params.slug}`,
    type: 'article',
    publishedTime: date,
  });
};

export default function ArticlePage() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : null;

  if (!article) {
    return (
      <PageContainer>
        <div className="text-center py-xl">
          <h1 className="font-serif text-2xl text-copy mb-sm">Not found</h1>
          <p className="text-muted text-sm">
            This article doesn't exist or hasn't been published yet.
          </p>
        </div>
      </PageContainer>
    );
  }

  const { frontmatter, Component } = article;

  return (
    <PageContainer>
      <MdxLayout title={frontmatter.title} date={frontmatter.date} type={frontmatter.type}>
        <Component />
      </MdxLayout>
    </PageContainer>
  );
}
