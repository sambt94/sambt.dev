// ABOUTME: Vitest configuration for the web app.
// ABOUTME: Uses jsdom environment for React component testing with MDX support.

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    tsconfigPaths(),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
  },
});
