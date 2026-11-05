import { getCollection } from 'astro:content';

// "sports_betting" or "sports-betting" -> "Sports Betting"
export const categoryLabel = (slug: string) =>
  slug
    .split(/[-_]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');

// Every folder inside src/content/blog/ that has at least one visible post.
export async function getCategories() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  const counts = new Map<string, number>();
  for (const p of posts) {
    if (!p.id.includes('/')) continue;
    const slug = p.id.split('/')[0];
    counts.set(slug, (counts.get(slug) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([slug, count]) => ({ slug, label: categoryLabel(slug), count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}