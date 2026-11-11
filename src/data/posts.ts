/**
 * Blog posts. Shape mirrors the Sanity `post` document (sanity/schemas/post.ts).
 * Sanity is the source of truth once it has at least one published post.
 * Until then, fallbackPosts render so /blog and the blog rows are never empty.
 */
import { sanityFetch, sanityImageUrl, type SanityImage } from "@/lib/sanity/client";
import { pt, wordCount, type PTNode } from "@/lib/sanity/portableText";

export interface Author { name: string; role?: string; photo?: string }

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: number;
  image: string;
  imageAlt: string;
  publishedAt?: string;
  author?: Author;
  featured?: boolean;
  body?: PTNode[];
  seoTitle?: string;
  seoDescription?: string;
}

/** Filter order on /blog. Categories not listed here sort after these. */
export const categoryOrder = ["Hitting", "Hitting Data", "Pitching", "Strength", "Michigan Season", "Facility", "Parents", "Rules"];

const brandon: Author = { name: "Brandon Inge", role: "Founder", photo: "/images/coaches/brandon-inge.webp" };

export const fallbackPosts: Post[] = [
  {
    title: "What Is a Good Exit Velocity for My Kid? Benchmarks by Age, Measured on HitTrax",
    slug: "good-exit-velocity-by-age",
    category: "Hitting Data",
    readTime: 7,
    featured: true,
    publishedAt: "2026-11-01",
    author: brandon,
    excerpt: "You saw a number on the cage screen and want to know if it is any good. Here is what we actually see across six HitTrax cages, broken out by age group.",
    image: "/images/batting-cages/hittrax.webp",
    imageAlt: "A coach pointing at HitTrax data on a screen",
    body: [
      pt.h2("Why the number matters"),
      pt.p("Exit velocity is the speed of the ball the instant it leaves the bat. It is the most useful number we track, because unlike bat speed it accounts for whether the barrel actually found the ball. An athlete can swing hard and still post a weak number if he is late, under it, or off the end."),
      pt.p("Parents see that number on the cage screen and immediately want to know whether it is good. That is a fair question, and the honest answer is that it depends almost entirely on age and physical maturity. So here is what we actually see in this building."),
      pt.img("/images/figma/31bca.webp", "Young players reviewing a HitTrax screen in an IPL cage", "Every cage at IPL runs HitTrax, and every session saves to a player profile."),
      pt.lead("Ten and unders tend to land in the forties. Twelve year olds cluster in the low to mid fifties. By fourteen the spread widens hard, high fifties through low seventies, and most of that spread comes down to physical maturity rather than technique. High school varsity hitters getting college looks are usually north of eighty five."),
      pt.p("These are our own numbers from our own cages, not national averages, and they will shift as our sample grows. Treat them as a reference point, not a report card."),
      pt.quote("This number tells you where you are standing. It does not tell you where you are going. The direction it moves over a winter tells you that."),
      pt.p("That is the part most families miss. A twelve year old who gains six miles an hour between November and March is on a very good path no matter where he started, and a kid sitting at the top of his age group who has not moved in a year has a problem worth looking at."),
      pt.h2("What to do with it"),
      pt.p("Ask for the number at the end of every session, and write down the date next to it. One reading is noise. Six readings across a winter is a trend, and a trend is something a coach can actually work with."),
      pt.p("If the number is not moving, the fix is usually not the swing. It is strength, it is bat weight, or it is timing against live speed rather than a machine. All three are things we can test in the building rather than guess at."),
      pt.p("Bring your athlete in, take a baseline, and we will tell you honestly what the number means and what to do about it."),
    ],
  },
  {
    title: "Indoor Batting Cages Near Brighton: What “HitTrax Included” Actually Means",
    slug: "indoor-batting-cages-brighton-hittrax",
    category: "Facility",
    readTime: 6,
    publishedAt: "2026-11-01",
    author: brandon,
    excerpt: "Most cages charge extra for the technology or do not have it at all. Here is how to compare what you are actually paying for before you book.",
    image: "/images/figma/47586.webp",
    imageAlt: "A hitter swinging in an IPL batting cage",
    body: [
      pt.p("Search for batting cages near Brighton and you will find a handful of options with very different price tags. The hourly rate is only part of the comparison. What comes with the cage matters more."),
      pt.h2("What to compare"),
      pt.li("Is ball tracking included, or is it an add-on per session?"),
      pt.li("Does the data save to a player profile you can look back at?"),
      pt.li("Is there a real pitching machine in every cage, and is it maintained?"),
      pt.li("How wide are the tunnels, and how high are the nets?"),
      pt.p("At IPL, HitTrax runs in all six cages at no extra charge, and every cage has a Jr. Hack Attack. Book a cage online and the technology comes with it."),
    ],
  },
  {
    title: "How to Add Bat Speed and Exit Velocity: The Ground-Up Sequence",
    slug: "add-bat-speed-exit-velocity",
    category: "Hitting",
    readTime: 8,
    publishedAt: "2026-11-01",
    author: brandon,
    excerpt: "Power starts at the floor, not in the hands. This is the sequence we teach in the Power Hitting clinic, in the order we teach it.",
    image: "/images/figma/bba82.webp",
    imageAlt: "A hitter making contact in an IPL cage",
    body: [
      pt.p("Most hitters trying to swing harder start with their hands. That is the last link in the chain, and pulling on it first is why so many swings get longer and slower instead of faster."),
      pt.h2("Start at the floor"),
      pt.p("Bat speed is built from the ground up: the back leg loads, the hips turn, the torso follows, and the hands come last. When that order is right, the barrel accelerates through the zone without the hitter muscling it."),
      pt.h2("Then measure it"),
      pt.p("We check every change on HitTrax, so a hitter knows within a few swings whether a new feel is actually adding speed or just feels different."),
    ],
  },
  {
    title: "Michigan High School Baseball and Softball 2027: Every Date That Shapes Your Winter",
    slug: "2027-michigan-season-dates",
    category: "Michigan Season",
    readTime: 5,
    publishedAt: "2026-11-01",
    author: brandon,
    excerpt: "First practice is March 15 and the first contest is March 24. Work backward from there and the winter plans itself.",
    image: "/images/figma/cc2e2.webp",
    imageAlt: "Players working on the IPL indoor field",
    body: [
      pt.p("First practice is March 15 and the first contest is March 24. Everything an athlete does between Thanksgiving and then should be built backward from those two dates."),
      pt.h2("Work backward"),
      pt.p("Strength work belongs early in the winter, when there is time to recover from it. Live reps and game-speed work belong in the last six weeks, when the goal is timing rather than building."),
      pt.p("Ask us for a winter plan built around your athlete's season, and we will lay it out week by week."),
    ],
  },
  {
    title: "Travel Ball or Rec? An Honest Guide",
    slug: "travel-ball-or-rec",
    category: "Parents",
    readTime: 10,
    publishedAt: "2026-11-01",
    author: brandon,
    excerpt: "Nobody selling you a roster spot will give you a straight answer about what your athlete actually needs. We will.",
    image: "/images/blog/parents.webp",
    imageAlt: "Parents watching from the IPL viewing area",
    body: [
      pt.p("The travel ball decision usually gets made in a parking lot, after a tryout, with a deposit due by Friday. It deserves more thought than that."),
      pt.h2("What travel ball is good for"),
      pt.p("More games against better competition, and more reps under pressure. For an athlete who is ready, that is valuable."),
      pt.h2("What it is not"),
      pt.p("A substitute for instruction. Plenty of athletes play eighty games a summer and never fix the swing flaw that is holding them back. Games show you where you are. Training is what moves you."),
    ],
  },
];

const FIELDS = `title, "slug": slug.current, excerpt, category, publishedAt, featured, mainImage,
  "imageAlt": mainImage.alt,
  "author": author->{ name, role, photo },
  "readTime": coalesce(readTime, round(length(pt::text(body)) / 5 / 220))`;

const LIVE = `_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))`;
const POSTS_QUERY = `*[${LIVE} && ($page == "" || $page in relatedPages) && slug.current != $exclude] | order(publishedAt desc)[0...$limit]{ ${FIELDS} }`;
const ALL_POSTS_QUERY = `*[${LIVE}] | order(publishedAt desc){ ${FIELDS} }`;
const POST_QUERY = `*[${LIVE} && slug.current == $slug][0]{ ${FIELDS}, body, seoTitle, seoDescription }`;

interface SanityPost extends Omit<Post, "image" | "author"> {
  mainImage?: SanityImage;
  author?: { name: string; role?: string; photo?: SanityImage };
}

function normalize(p: SanityPost): Post {
  const { mainImage, author, ...rest } = p;
  return {
    ...rest,
    readTime: Math.max(1, p.readTime ?? 1),
    image: sanityImageUrl(mainImage, { width: 1400, height: 840 }) ?? "",
    imageAlt: p.imageAlt || p.title,
    author: author ? { name: author.name, role: author.role, photo: sanityImageUrl(author.photo, { width: 96, height: 96 }) } : undefined,
  };
}

const withReadTime = (p: Post): Post => (p.body ? { ...p, readTime: p.readTime || Math.max(1, Math.round(wordCount(p.body) / 220)) } : p);

/** Latest posts, optionally only those tagged for a page. Falls back to latest overall, then to fallbackPosts. */
export async function getPosts({ limit = 3, page = "", exclude = "" }: { limit?: number; page?: string; exclude?: string } = {}): Promise<Post[]> {
  let result = await sanityFetch<SanityPost[]>(POSTS_QUERY, { limit, page, exclude });
  if (page && !result?.length) result = await sanityFetch<SanityPost[]>(POSTS_QUERY, { limit, page: "", exclude });
  if (!result?.length) return fallbackPosts.filter((p) => p.slug !== exclude).slice(0, limit);
  return result.map(normalize);
}

/** Every published post, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  const result = await sanityFetch<SanityPost[]>(ALL_POSTS_QUERY);
  if (!result?.length) return fallbackPosts.map(withReadTime);
  return result.map(normalize);
}

/** One post with its body. */
export async function getPost(slug: string): Promise<Post | undefined> {
  const result = await sanityFetch<SanityPost & { body?: PTNode[] }>(POST_QUERY, { slug });
  if (result) return normalize(result);
  return fallbackPosts.find((p) => p.slug === slug);
}

/** "12 Nov 2026" */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso.length === 10 ? `${iso}T12:00:00` : iso);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "America/Detroit" });
}

export const initials = (name: string) => name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
