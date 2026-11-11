/**
 * Memberships page content. Plans, prices and inclusions match Swift
 * (Services > Memberships) as of 2026-11-04. Bracketed text is waiting on Shani.
 */
import { swift } from "@/data/swift";
import { denClips } from "@/data/media";

const m = swift.memberships;

export const hero = {
  eyebrow: "Batting Cage and Training Memberships · Brighton, MI",
  title: "Train more. Pay less.",
  text: "Monthly plans for athletes who are in the building every week. Cage sessions at a lower rate, The Den on the top plans, and member pricing on camps and clinics.",
  image: "/images/batting-cages/hero.webp",
  primary: { label: "Compare plans", href: "#plans" },
  secondary: { label: "Book a tour", href: "/contact" },
};

export const cagePlans = {
  id: "plans-title",
  eyebrow: "Cage memberships",
  heading: "Pick your level.",
  text: "Every session is a 30-minute cage credit you book online, any open slot. Stack two credits for a full hour.",
  tiers: [
    { name: "Bronze", price: "$99/mo", note: "4 cage sessions a month", features: ["Four 30-minute sessions", "Stack two for 60 minutes", "HitTrax every session", "10% off camps and clinics"], image: "/images/batting-cages/hero.webp", alt: "A hitter in a single cage", cta: { label: "Join", href: m.bronze } },
    { name: "Silver", price: "$149/mo", note: "6 cage sessions a month", features: ["Six 30-minute sessions", "Stack two for 60 minutes", "HitTrax every session", "10% off camps and clinics"], image: "/images/batting-cages/machine.webp", alt: "A hitter loading against a pitching machine", cta: { label: "Join", href: m.silver } },
    { name: "Gold", price: "$199/mo", note: "8 cage sessions a month", features: ["Eight 30-minute sessions", "Stack two for 60 minutes", "HitTrax every session", "15% off camps and clinics"], image: "/images/batting-cages/team.webp", alt: "Players reviewing HitTrax data together", cta: { label: "Join", href: m.gold }, featured: true, badge: "Most popular" },
    { name: "Unlimited", price: "$299/mo", note: "a full month of hitting", features: ["Cage time every day", "Up to one hour per day", "HitTrax every session"], image: "/images/batting-cages/hittrax.webp", alt: "A coach reviewing HitTrax results", cta: { label: "Join", href: m.unlimited } },
  ],
};

export const elitePlans = {
  id: "elite-title",
  eyebrow: "Cages plus The Den",
  heading: "Train the whole athlete.",
  text: "Unlimited cage time plus a fully customized strength program from the 2SP Director of Strength and Conditioning. 10% off your first month on Platinum.",
  tiers: [
    { name: "Platinum Foundations", price: "$500/mo", note: "ages 11 and under", features: ["Unlimited cage sessions, up to 1 hour a day", "Up to 2 Den sessions a week", "Custom 2SP program", "10% off your first month"], image: "/images/the-den/den-med-ball-throws.webp", alt: "Young athletes doing med ball throws in The Den", cta: { label: "Join", href: m.platinumFoundations } },
    { name: "Platinum Performance", price: "$700/mo", note: "ages 12 and up", features: ["Unlimited cage sessions, up to 1 hour a day", "Up to 3 Den sessions a week", "Custom 2SP program", "10% off your first month"], image: "/images/the-den/den-force-plate.webp", alt: "Athletes testing on the force plate in The Den", cta: { label: "Join", href: m.platinumPerformance }, featured: true, badge: "Cages and The Den" },
    { name: "Inge Elite Orange", price: "$730/mo", note: "Inge Elite", features: ["[What is included: confirm with Shani]"], image: "/images/the-den/den-hex-bar.webp", alt: "An athlete pulling a hex bar in The Den", cta: { label: "Join", href: m.ingeEliteOrange } },
  ],
};

export const included = {
  eyebrow: "Every plan",
  heading: "What members get.",
  text: "The basics on every membership.",
  items: [
    { tag: "Booking", title: "Book any open slot", text: "Members book their sessions online whenever a cage is open.", image: "/images/batting-cages/hero.webp", alt: "A hitter swinging in a batting cage" },
    { tag: "Technology", title: "HitTrax every session", text: "Exit velocity, launch angle and video on every swing, in all six cages.", image: "/images/batting-cages/hittrax.webp", alt: "A coach pointing at HitTrax data on a screen" },
    { tag: "Flexibility", title: "Stack your credits", text: "Combine two 30-minute credits into a full hour in the cage.", image: "/images/batting-cages/machine.webp", alt: "A hitter loading against a Jr. Hack Attack machine" },
    { tag: "Savings", title: "Member pricing", text: "10 to 15% off camps and clinics, depending on your plan.", image: "/images/figma/dc8a9.webp", alt: "The indoor turf field at IPL" },
  ],
};

export const den = {
  eyebrow: "Strength only",
  heading: "Just want The Den?",
  text: "The Den runs its own monthly programs, coached by 2SP: Foundations for ages 13 and under at $199, Performance Training Lite at $320 and Performance Training at $400. No cage plan needed.",
  button: { label: "See Den programs", href: "/the-den#programs" },
  image: "/images/the-den/den-band-lateral.webp",
  video: denClips.splitSquat.src,
  alt: "An athlete doing split squats at the rack in The Den",
};

export const faqs = {
  heading: "Membership questions.",
  text: "The short answers.",
  items: [
    { question: "How do cage sessions work?", answer: "Each credit is one 30-minute cage session, booked online for any open slot. Combine two credits when you want a full hour." },
    { question: "When does billing start?", answer: "The day you join. Your plan then renews monthly." },
    { question: "What is the difference between Gold and Platinum?", answer: "Gold is cage time only: eight sessions a month. Platinum adds unlimited cage time, up to an hour a day, plus a custom 2SP strength program in The Den." },
    { question: "Do unused sessions roll over?", answer: "[Confirm with Shani.]" },
    { question: "How do I cancel or freeze a membership?", answer: "[Confirm the cancellation and freeze policy with Shani.]" },
  ],
};
