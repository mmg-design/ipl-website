/** Training hub (/training). Pathway hrefs fall back to booking until each page exists. */
import { booking, contact } from "@/data/home";
import type { Pathway } from "@/components/content/PathwayList.astro";

export const hero = {
  eyebrow: "Baseball and softball training · Brighton, MI",
  title: "Find the training pathway built for your goals",
  text: "Hitting, fielding, pitching, strength and the mental side are each taught by someone who did it at the highest level. Start wherever your athlete needs the most help, and move between them as they develop.",
  primary: { label: "Book a lesson", href: booking },
  secondary: { label: "Contact us", href: "/contact" },
};

export const collage = [
  { src: "/images/figma/78fac.webp" },
  { src: "/images/figma/1cf5b.webp" },
  { src: "/images/the-den/room.webp" },
  { src: "/images/hittrax/derby.webp" },
  { src: "/images/figma/11101.webp" },
  { src: "/images/figma/28ee9.webp" },
];

export const pathways: Pathway[] = [
  { id: "baseball", label: "Baseball Training", eyebrow: "Hitting and defense", heading: "Baseball training built on real numbers.", text: "Private and small-group lessons for hitters and position players. Coaches work swing mechanics, approach and defensive footwork, and every rep in the cage is tracked on HitTrax, so your athlete sees exit velocity and launch angle move week over week instead of guessing.", image: "/images/figma/bba82.webp", alt: "A baseball hitter swinging in an IPL cage", button: { label: "Book a baseball lesson", href: "/training/baseball" } },
  { id: "softball", label: "Softball Training", eyebrow: "Fastpitch development", heading: "Fastpitch training from coaches who know the game.", text: "Hitting, slapping, fielding and catching instruction built for fastpitch, not adapted from baseball. Lessons and team sessions run on the full turf infield and in HitTrax cages, with a plan that follows your athlete from rec ball through travel and high school.", image: "/images/figma/9aeaf.webp", alt: "Coaches with a softball team on the indoor infield", button: { label: "Book a softball lesson", href: "/training/softball" } },
  { id: "pitching", label: "Pitching", eyebrow: "HP Throwing Program", heading: "Throw harder and stay healthy.", text: "Velocity and command work through the High Performance Throwing Program, with mound sessions, radar and video on every bullpen. Arm care and recovery are built into every plan, so gains in velocity never come at the cost of your athlete's arm.", image: "/images/figma/8edc4.webp", alt: "A pitcher throwing in the IPL pitching tunnel", button: { label: "Start pitching training", href: "/training/pitching" } },
  { id: "mental-performance", label: "Mental Performance", eyebrow: "Champion Mindset Group", heading: "Train the part of the game you can't see.", text: "One-on-one and team sessions with Champion Mindset Group on confidence, routines, focus and handling failure. Athletes learn the same mental skills college and pro players rely on, and practice them like any other part of their game.", image: "/images/figma/31bca.webp", alt: "Young players reviewing a HitTrax screen together", button: { label: "Explore mental performance", href: "/training/mental-performance" } },
  { id: "team-rentals", label: "Team Rentals", eyebrow: "Teams and organizations", heading: "Your team's winter home.", text: "Rent the full turf infield, the cages or both, by the hour or for the season. Add Pro Practice Sessions run start to finish by Brandon Inge. Organizations that commit to 12 or more weeks get 15% off and keep the same weekly slot all winter.", image: "/images/figma/78fac.webp", alt: "Brandon Inge running a team session in the cage", button: { label: "See team rentals", href: "/training/team-rentals" } },
];
