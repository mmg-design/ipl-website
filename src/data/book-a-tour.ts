/**
 * Book a Tour page content (/book-a-tour). Figma: "Book a Tour — Wireframe (Desktop)".
 * Not live at launch: the page is noindexed (src/consts.ts) and nothing links to it
 * until the tour form has a working endpoint (Web3Forms). Then remove it from
 * NOINDEX_ROUTES and point the footer and About buttons here.
 */
import { swift } from "@/data/swift";

const request = "#request";

export const hero = {
  eyebrow: "Facility tours · Brighton, MI",
  title: "Come see the building before you commit to anything.",
  text: "A tour takes about fifteen minutes. We will walk you through the cages, the infield and The Den, introduce you to whoever is coaching that day, and answer anything you want to ask. No pitch and no pressure.",
  primary: { label: "Request a tour", href: request },
  secondary: { label: "Book a cage", href: swift.rentals.cage1 },
};

/** Facility only: cages, turf, The Den, HitTrax. Two rows drift in opposite directions. */
export const collage = [
  { src: "/images/figma/28ee9.webp" },
  { src: "/images/figma/9ae85.webp" },
  { src: "/images/figma/78fac.webp" },
  { src: "/images/figma/47586.webp" },
  { src: "/images/the-den/room.webp" },
  { src: "/images/figma/1cf5b.webp" },
  { src: "/images/figma/9aeaf.webp" },
  { src: "/images/figma/cc2e2.webp" },
  { src: "/images/blog/parents.webp" },
  { src: "/images/figma/dc8a9.webp" },
  { src: "/images/hittrax/derby.webp" },
  { src: "/images/blog/season.webp" },
];

export const requestTour = {
  eyebrow: "Request a tour",
  heading: "Pick a time.",
  text: "We confirm by text or email the same business day.",
  image: "/images/figma/bf6c5.webp",
  alt: "Athletes and coaches training in the batting cages at Inge Performance Lab",
  position: "40% 50%",
  id: "request-title",
};

export const stops = {
  eyebrow: "What you'll see",
  heading: "Three stops.",
  text: "The whole floor in fifteen minutes.",
  items: [
    { title: "The Cages", text: "Six tunnels, HitTrax live on the screens.", image: "/images/figma/47586.webp", alt: "Hitter in a batting cage with the HitTrax screen behind", position: "50% 35%" },
    { title: "The Infield", text: "Full varsity turf. Walk the bases.", image: "/images/infield-turf.webp", alt: "Indoor turf infield at Inge Performance Lab" },
    { title: "The Den", text: "The 2SP strength room.", image: "/images/figma/582d5.webp", alt: "Athletes training box jumps in The Den strength room" },
  ],
};

/** The Building section: the tour button would point back at this page, so it books a cage instead. */
export const building = {
  primary: { label: "Book a cage", href: swift.rentals.cage1 },
  secondary: { label: "See the cages", href: "/batting-cages" },
};
