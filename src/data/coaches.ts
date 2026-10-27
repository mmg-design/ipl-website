/**
 * Coaches / staff.
 *
 * Shape mirrors the Sanity `coach` document (see sanity/schemas/coach.ts).
 * Until Sanity is connected, `getCoaches()` returns the fallback list below.
 * Once SANITY_PROJECT_ID and SANITY_DATASET are set, it pulls from Sanity
 * instead and this list is ignored.
 */
import { sanityFetch, sanityImageUrl, type SanityImage } from "@/lib/sanity/client";

export interface Coach {
  name: string;
  role: string;
  bio: string;
  /** Final, ready-to-render image URL. Empty shows the placeholder. */
  photo?: string;
  photoAlt?: string;
  order?: number;
}

export const fallbackCoaches: Coach[] = [
  { name: "Brandon Inge", role: "Founder · Hitting and fielding", bio: "13 MLB seasons, Detroit Tigers third baseman. Teaches what he was taught at the highest level." },
  { name: "Shani Inge", role: "Co-founder · Operations", bio: "Runs the building, the programs and the partnerships. The reason the lights are on." },
  { name: "Kyle Fedorka", role: "High Performance Training", bio: "Pitching mechanics, velocity and arm care for baseball and softball." },
  { name: "Strength Lead, 2SP Sports Performance", role: "The Den powered by 2SP", bio: "Strength, speed and conditioning for every sport that walks in." },
  { name: "Champion Mindset Coach", role: "Mental performance", bio: "Confidence and pressure, coached as a skill." },
  { name: "Jordan Humitz", role: "Softball lead", bio: "Hitting and pitching instruction for fastpitch athletes, with deep roots in the Michigan travel softball community." },
];

const COACHES_QUERY = `*[_type == "coach" && !(_id in path("drafts.**")) && showOnSite != false] | order(order asc){
  name, role, bio, order, "photo": photo, "photoAlt": photo.alt
}`;

interface SanityCoach extends Omit<Coach, "photo"> {
  photo?: SanityImage;
}

export async function getCoaches(): Promise<Coach[]> {
  const result = await sanityFetch<SanityCoach[]>(COACHES_QUERY);
  if (!result?.length) return fallbackCoaches;
  return result.map((c) => ({
    ...c,
    photo: sanityImageUrl(c.photo, { width: 800, height: 800 }),
    photoAlt: c.photoAlt || c.name,
  }));
}
