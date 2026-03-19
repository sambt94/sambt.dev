// ABOUTME: Utility for loading and listing MDX articles from the content directory.
// ABOUTME: Uses Vite's import.meta.glob for build-time discovery of .mdx files.

export interface ArticleFrontmatter {
  title: string;
  type: 'case-study' | 'essay';
  date: string;
  summary: string;
  tags: string[];
  status: 'published' | 'draft';
}

export interface ArticleMeta extends ArticleFrontmatter {
  slug: string;
}

interface MdxModule {
  default: React.ComponentType;
  frontmatter: ArticleFrontmatter;
}

const modules = import.meta.glob<MdxModule>('../content/writing/*.mdx', { eager: true });

export function getAllArticles(): ArticleMeta[] {
  return Object.entries(modules)
    .map(([filepath, mod]) => {
      const slug = filepath.replace('../content/writing/', '').replace('.mdx', '');
      return {
        slug,
        ...mod.frontmatter,
      };
    })
    .filter(article => article.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(
  slug: string
): { frontmatter: ArticleFrontmatter; Component: React.ComponentType } | null {
  const filepath = `../content/writing/${slug}.mdx`;
  const mod = modules[filepath];
  if (!mod || mod.frontmatter.status !== 'published') return null;
  return {
    frontmatter: mod.frontmatter,
    Component: mod.default,
  };
}

export function getArticleFrontmatterBySlug(slug: string): ArticleFrontmatter | null {
  const filepath = `../content/writing/${slug}.mdx`;
  const mod = modules[filepath];
  if (!mod || mod.frontmatter.status !== 'published') return null;
  return mod.frontmatter;
}
