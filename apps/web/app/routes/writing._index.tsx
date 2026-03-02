// ABOUTME: Writing index page listing all published articles.
// ABOUTME: Loads articles via import.meta.glob and displays as preview cards.

import type { MetaFunction } from '@remix-run/node';
import { PageContainer } from '~/components/layout';
import { PageHeader } from '~/components/page-header';
import { ArticlePreview } from '~/components/article-preview';
import { getAllArticles } from '~/lib/articles';
import { buildMeta } from '~/lib/seo';

export const meta: MetaFunction = () =>
  buildMeta({
    title: 'Writing',
    description:
      'Writing about what happens when your job starts changing underneath you — and what you can build when it does.',
    path: '/writing',
  });

export default function WritingIndex() {
  const articles = getAllArticles();

  return (
    <PageContainer>
      <div>
        <PageHeader
          title="Writing"
          subtitle="Writing about what happens when your job starts changing underneath you — and what you can build when it does. More coming soon."
        />
        {articles.length > 0 ? (
          <div>
            {articles.map(article => (
              <ArticlePreview
                key={article.slug}
                slug={article.slug}
                title={article.title}
                type={article.type}
                date={article.date}
                summary={article.summary}
              />
            ))}
            <div className="border-t border-border" />
          </div>
        ) : (
          <p className="text-muted text-sm">More coming soon.</p>
        )}
      </div>
    </PageContainer>
  );
}
