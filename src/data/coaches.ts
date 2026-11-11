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
  /** Which training pages list this coach. */
  sports?: ("baseball" | "softball" | "pitching" | "strength" | "mental")[];
  /** Shorter role/bio for sport pages (falls back to role/bio). */
  sportRole?: string;
  sportBio?: string;
  /** Show in the About page grid (default true). */
  aboutPage?: boolean;
}

export const fallbackCoaches: Coach[] = [
  { name: "Brandon Inge", photo: "/images/coaches/brandon-inge.webp", photoAlt: "Brandon Inge", role: "Founder · Hitting and fielding", sportRole: "Hitting and fielding", bio: "13 MLB seasons, Detroit Tigers third baseman. Teaches what he was taught at the highest level.", sportBio: "13 MLB seasons, Detroit Tigers third baseman.", sports: ["baseball"] },
  { name: "Shani Inge", role: "Co-founder · Operations", bio: "Runs the building, the programs and the partnerships. The reason the lights are on." },
  { name: "Kyle Fedorka", role: "High Performance Training", sportRole: "Pitching · High Performance Training", bio: "Pitching mechanics, velocity and arm care for baseball and softball.", sports: ["baseball", "softball", "pitching"] },
  { name: "Strength Lead, 2SP Sports Performance", role: "The Den powered by 2SP", bio: "Strength, speed and conditioning for every sport that walks in.", sports: ["strength"] },
  { name: "Champion Mindset Coach", role: "Mental performance", bio: "Confidence and pressure, coached as a skill.", sports: ["mental"] },
  { name: "Jordan Humitz", role: "Softball lead", bio: "Hitting and pitching instruction for fastpitch athletes, with deep roots in the Michigan travel softball community.", sports: ["softball"] },
  { name: "Megan Bondy", role: "Softball hitting instructor", bio: "Softball hitting lessons for fastpitch athletes. [Credentials: confirm with Shani]", sports: ["softball"], aboutPage: false },
  { name: "Taylor Wagner", role: "Softball catching instructor", bio: "Catching lessons for fastpitch athletes. [Credentials: confirm with Shani]", sports: ["softball"], aboutPage: false },
  { name: "Rob Heumann", role: "Hitting instructor", bio: "IPL's lead hitting and fielding instructor, and assistant varsity baseball and hitting coach at Detroit Country Day School.", sports: ["baseball"], aboutPage: false },
  { name: "A.J. Achter", role: "Pitching instructor", bio: "Former MLB relief pitcher with the Twins and Angels, and former pitching coach at Eastern Michigan. Bullpen work, arm care and pitch design.", sports: ["baseball", "pitching"], aboutPage: false },
];

const COACHES_QUERY = `*[_type == "coach" && !(_id in path("drafts.**")) && showOnSite != false] | order(order asc){
  name, role, bio, order, sports, sportRole, sportBio, aboutPage, "photo": photo, "photoAlt": photo.alt
}`;

interface SanityCoach extends Omit<Coach, "photo"> {
  photo?: SanityImage;
}

/** All coaches, or only those tagged for a sport page (with sport-specific role/bio). */
export async function getCoaches(sport?: NonNullable<Coach["sports"]>[number]): Promise<Coach[]> {
  const all = await getAllCoaches();
  if (!sport) return all.filter((c) => c.aboutPage !== false);
  return all
    .filter((c) => c.sports?.includes(sport))
    .map((c) => ({ ...c, role: c.sportRole ?? c.role, bio: c.sportBio ?? c.bio }));
}

async function getAllCoaches(): Promise<Coach[]> {
  const result = await sanityFetch<SanityCoach[]>(COACHES_QUERY);
  if (!result?.length) return fallbackCoaches;
  return result.map((c) => ({
    ...c,
    photo: sanityImageUrl(c.photo, { width: 800, height: 800 }),
    photoAlt: c.photoAlt || c.name,
  }));
}
