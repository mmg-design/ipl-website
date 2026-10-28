/** The Den feature page content. Baseball and softball first, open to every sport (per Shani's note). */
import { booking } from "@/data/home";

export const hero = {
  eyebrow: "Baseball and softball strength training · Michigan",
  title: "Training built for the sport you play.",
  text: "The Den is a Division 1 caliber weight room inside IPL, run by 2SP. Rotational power, arm care, speed, agility and durability, programmed for baseball and softball athletes first. Every other sport is welcome on the floor too.",
  image: "/images/figma/28ee9.webp",
  primary: { label: "Book a session", href: booking },
  secondary: { label: "See memberships", href: "/#memberships" },
};

export const packages = {
  eyebrow: "Flexible packages",
  heading: "Drop in or buy a pack.",
  text: "No membership required. Same floor, same coaches.",
  items: [
    { title: "Drop-in session", text: "$60 for a single session. Show up, train, leave.", image: "/images/figma/28ee9.webp", alt: "Athletes doing box step-ups in The Den" },
    { title: "10 session package", text: "$450. Ten sessions, use them on your schedule.", image: "/images/the-den/room.webp", alt: "Racks and platforms in The Den" },
    { title: "20 session package", text: "$800. The best per-session rate in the building.", image: "/images/figma/11101.webp", alt: "Softball players doing agility work on the turf" },
  ],
};

export const room = {
  eyebrow: "The room",
  heading: "Racks, turf, sleds, space.",
  text: "Platforms and racks, open turf for sled and med ball work, and the space to run a full group without waiting on a station. 2SP coaches are on the floor for every session.",
  button: { label: "Book a tour", href: booking },
  image: "/images/the-den/floor.webp",
  alt: "The IPL training floor with racks next to the turf",
};

export const twoSP = {
  heading: "2SP builds the athlete. IPL makes the ballplayer.",
  text: "2SP is the foundation for every athlete who comes through IPL. They build strength, speed and agility, then IPL and HP sharpen the baseball and softball player. Hockey, soccer, football and basketball athletes train in The Den all year too.",
  button: { label: "Learn more about 2SP", href: "#programs" },
  image: "/images/figma/28ee9.webp",
  alt: "A 2SP coach running a group in The Den",
};

export const programs = {
  eyebrow: "Programs",
  heading: "Pick your program.",
  text: "Two monthly programs by age, plus drop-in and session packages for anyone.",
  tiers: [
    { name: "Foundations", price: "$199/mo", note: "ages 13 and under", features: ["Movement quality, coordination, speed and strength", "Age-appropriate programming", "2SP coach on the floor"], image: "/images/figma/28ee9.webp", alt: "Young athletes training in The Den", cta: { label: "Join", href: booking } },
    { name: "Performance Training", price: "$400/mo", note: "ages 14 and up", features: ["Structured small-group training", "Strength, speed, power, agility and movement efficiency", "Proven performance methods", "Return-to-play and in-season cycles", "Coach on the floor"], image: "/images/the-den/floor.webp", alt: "Older athletes training on the IPL floor", cta: { label: "Join", href: booking } },
  ],
};
