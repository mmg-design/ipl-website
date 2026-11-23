/** Team Rentals page content (/training/team-rentals). Field and cage blocks, Pro Practice, org days. */
import { contact, training } from "@/data/home";

// 2 hour combo price ($500) matches Swift but looks high next to $200 / $230; confirm with Shani.
const request = `${contact}?subject=Team%20block%20request`;
const navCard = training.find((t) => t.id === "team-training")!;

export const hero = {
  eyebrow: "Indoor Field and Cage Rentals for Teams · Brighton, MI",
  title: "Indoor baseball field rental and batting cages for your team.",
  text: "Batting cage rental and indoor baseball field rental by the block: reserve the full turf infield and six HitTrax cages and run an actual practice in January, instead of rotating twelve kids through one cage. Teams that commit to 12 weeks or more receive a discount.",
  image: navCard.image,
  primary: { label: "Request a block", href: request },
  secondary: { label: "See rates", href: "#rates" },
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Field and cage combos.",
  text: "Full infield plus cages, reserved by the block. Contact us to schedule. Teams that commit to 12 weeks or more receive a discount.",
  tiers: [
    { name: "1 hour combo", price: "$200", note: "per block", features: ["Full turf infield", "Cages included", "HitTrax in every cage"], image: "/images/figma/dc8a9.webp", alt: "The full turf infield at IPL", cta: { label: "Request this block", href: request } },
    { name: "1.5 hour combo", price: "$230", note: "per block", features: ["Full turf infield", "Cages included", "HitTrax in every cage", "Time for a full practice plan"], image: "/images/figma/cc2e2.webp", alt: "A team practicing on the indoor infield", featured: true, badge: "Most booked", cta: { label: "Request this block", href: request } },
    { name: "2 hour combo", price: "$500", note: "per block", features: ["Full turf infield", "Cages included", "HitTrax in every cage", "Room for a full roster", "Discount for 12+ week commitments"], image: "/images/figma/card-infield.webp", alt: "The IPL infield from home plate", cta: { label: "Request this block", href: request } },
  ],
};

export const proPractice = {
  eyebrow: "Pro Practice",
  heading: "Let Brandon run your practice.",
  text: "Schedule a Pro Practice and Brandon Inge runs your team's session start to finish: infield, cage work, base running, the whole plan. Your coaches stay with your players. He plans and runs the practice.",
  points: [
    { title: "$20 per player, per hour", text: "For 8 to 12 players, on top of the rental: the $150 field rental for defensive sessions or the $160 cage rental for offensive sessions." },
    { title: "Offense or defense", text: "Pick the focus. Brandon's calendar is limited, so contact us to schedule either session." },
  ],
  button: { label: "Schedule defense", href: `${contact}?subject=Pro%20Practice%3A%20Defensive` },
  secondaryButton: { label: "Schedule offense", href: `${contact}?subject=Pro%20Practice%3A%20Offensive` },
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
    { question: "Do you offer discounts for season-long blocks?", answer: "Yes. Teams that commit to 12 weeks or more receive a discount and keep the same weekly slot all winter. Contact us for details." },
    { question: "What is the cancellation policy for blocks?", answer: "Season blocks are a commitment: the discount assumes you use the slot. If you can't make a week, let us know at least 48 hours ahead and we'll work with you on a make-up session, subject to availability." },
  ],
};
