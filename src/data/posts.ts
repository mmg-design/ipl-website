/**
 * Blog posts. Shape mirrors the Sanity `post` document (sanity/schemas/post.ts).
 * With SANITY_PROJECT_ID unset, fallbackPosts are used so the site still renders.
 */
import { sanityFetch, sanityImageUrl, type SanityImage } from "@/lib/sanity/client";

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
  imageAlt: string;
  publishedAt?: string;
}

export const fallbackPosts: Post[] = [
  { title: "What Is a Good Exit Velocity for My Kid?", slug: "good-exit-velocity-by-age", category: "Hitting Data", readTime: 7, excerpt: "You saw a number on the cage screen and want to know if it is any good. Here is what we actually see by age across six HitTrax cages.", image: "/images/batting-cages/hittrax.webp", imageAlt: "A coach pointing at HitTrax data on a screen" },
  { title: "Every 2027 Date That Shapes Your Winter", slug: "2027-michigan-season-dates", category: "Michigan Season", readTime: 5, excerpt: "First practice is March 15 and the first contest is March 24. Work backward from there and the winter plans itself.", image: "/images/blog/season.webp", imageAlt: "Players and a parent on the IPL indoor field" },
  { title: "Travel Ball or Rec? An Honest Guide", slug: "travel-ball-or-rec", category: "Parents", readTime: 10, excerpt: "Nobody selling you a roster spot will give you a straight answer about what your athlete actually needs. We will.", image: "/images/blog/parents.webp", imageAlt: "Parents watching from the IPL viewing area" },
];

const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**")) && ($page == "" || $page in relatedPages)]
  | order(publishedAt desc)[0...$limit]{
    title, "slug": slug.current, excerpt, category, publishedAt, mainImage,
    "imageAlt": mainImage.alt,
    "readTime": coalesce(readTime, round(length(pt::text(body)) / 5 / 220))
  }`;

interface SanityPost extends Omit<Post, "image"> { mainImage?: SanityImage }

/** Latest posts, optionally only those tagged for a page. Falls back to latest overall, then to fallbackPosts. */
export async function getPosts({ limit = 3, page = "" }: { limit?: number; page?: string } = {}): Promise<Post[]> {
  let result = await sanityFetch<SanityPost[]>(POSTS_QUERY, { limit, page });
  if (page && !result?.length) result = await sanityFetch<SanityPost[]>(POSTS_QUERY, { limit, page: "" });
  if (!result?.length) return fallbackPosts.slice(0, limit);
  return result.map((p) => ({
    ...p,
    readTime: Math.max(1, p.readTime ?? 1),
    image: sanityImageUrl(p.mainImage, { width: 900, height: 600 }) ?? "",
    imageAlt: p.imageAlt || p.title,
  }));
}
