/** Team Rentals page content (/training/team-rentals). Field and cage blocks, Pro Practice, org days. */
import { contact, training } from "@/data/home";
import { swift } from "@/data/swift";

const r = swift.rentals;
const request = `${contact}?subject=Team%20block%20request`;
const navCard = training.find((t) => t.id === "team-training")!;

export const hero = {
  eyebrow: "Indoor Field and Cage Rentals for Teams · Brighton, MI",
  title: "Give your team a real field to practice on all winter.",
  text: "Book the full turf infield and six HitTrax cages by the block and run an actual practice in January, instead of rotating twelve kids through one cage. Organizations that commit to 12 or more weeks get 15% off.",
  image: navCard.image,
  primary: { label: "Request a block", href: request },
  secondary: { label: "See rates", href: "#rates" },
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Field and cage combos.",
  text: "Full infield plus cages, booked by the block. Organizations running 12 or more weeks get 15% off.",
  tiers: [
    { name: "1 hour combo", price: "$200", note: "per block", features: ["Full turf infield", "Cages included", "HitTrax in every cage"], image: "/images/figma/dc8a9.webp", alt: "The full turf infield at IPL", cta: { label: "Book this block", href: r.fieldCombo1h } },
    { name: "1.5 hour combo", price: "$230", note: "per block", features: ["Full turf infield", "Cages included", "HitTrax in every cage", "Time for a full practice plan"], image: "/images/figma/cc2e2.webp", alt: "A team practicing on the indoor infield", featured: true, badge: "Most booked", cta: { label: "Book this block", href: r.fieldCombo90m } },
    { name: "2 hour combo", price: "$500", note: "per block [confirm: Swift price looks off]", features: ["Full turf infield", "Cages included", "HitTrax in every cage", "Room for a full roster", "15% off 12+ week blocks"], image: "/images/figma/card-infield.webp", alt: "The IPL infield from home plate", cta: { label: "Book this block", href: r.fieldCombo2h } },
  ],
};

export const proPractice = {
  eyebrow: "Pro Practice",
  heading: "Let Brandon run your practice.",
  text: "Book a Pro Practice and Brandon Inge runs your team's session start to finish: infield, cage work, base running, the whole plan. Your coaches stay with your players. He plans and runs the practice.",
  points: [
    { title: "$20 per player, per hour", text: "For 8 to 12 players. Field and cages included in the session." },
    { title: "Offense or defense", text: "Pick the focus. Book a defensive session or an offensive session online." },
  ],
  button: { label: "Book defense", href: swift.lessons.brandonProDefense },
  secondaryButton: { label: "Book offense", href: swift.lessons.brandonProOffense },
  image: "/images/figma/78fac.webp",
  alt: "Brandon Inge running a team session in the cage",
};

export const orgDays = {
  eyebrow: "Org days",
  heading: "Bring the whole program.",
  text: "IPL hosts organization days for travel programs and high school teams. Your rosters get the cages and the infield, families can watch from inside the building, and Brandon works the floor with your players. Brighton varsity baseball was the first team through the door.",
  button: { label: "Ask about an org day", href: `${contact}?subject=Organization%20day` },
  image: "/images/figma/bf6c5.webp",
  alt: "Teams training across the IPL floor during an organization day",
};

export const faqs = {
  heading: "Team questions.",
  text: "What coaches ask before they book.",
  items: [
    { question: "How far ahead do we book?", answer: "Winter blocks fill by late October. Request your weekly slot in September if you want a specific night." },
    { question: "Can we bring our own machines?", answer: "Yes. Every cage already has a Jr. Hack Attack. Bring your own if you prefer it." },
    { question: "What about weekends?", answer: "Weekend blocks exist and go first. Ask early." },
    { question: "Can we split a block with another team?", answer: "Yes, and plenty of organizations do. One contact, one bill." },
    { question: "How does the 15% discount work?", answer: "Organizations that commit to 12 or more weeks get 15% off and keep the same weekly slot all winter." },
    { question: "What is the cancellation policy for blocks?", answer: "[Confirm with Shani.] Season blocks are a commitment: the 15% discount assumes you use the slot. Missed weeks can be made up subject to availability." },
  ],
};
