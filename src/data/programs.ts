/**
 * Programs listing (/programs). Groups of program cards rendered with WaysGrid.
 * Shaped to move into a Sanity "program" collection later (name, type, blurb, image, register link).
 */
import { contact } from "@/data/home";
import { swift } from "@/data/swift";

const ask = (subject: string) => `${contact}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  eyebrow: "Camps, clinics and leagues · Brighton, MI",
  title: "Leagues, team blocks and practices.",
  text: "Our six on six leagues keep standings and track every at-bat on HitTrax. Team blocks hold your slot all winter, and Pro Practice sessions are planned and run start to finish by Brandon Inge. Camps and clinics are posted here as they open.",
  image: "/images/figma/cc2e2.webp",
  primary: { label: "See leagues", href: "#leagues" },
  secondary: { label: "Team training", href: "#team-training" },
};

export const leagues = {
  eyebrow: "Leagues",
  heading: "Six on six, indoors, all winter.",
  text: "Small-sided games on the full varsity infield, with HitTrax tracking every at-bat and standings posted weekly. Every player hits every inning and fields every ball.",
  items: [
    { tag: "League", eyebrow: "Winter 2027 · 10U, 12U, 14U", title: "6v6 Softball League", text: "Fastpitch games on the full varsity infield with HitTrax tracking every at-bat. Standings posted weekly.", meta: "Dates and price announced at registration.", image: "/images/figma/9aeaf.webp", alt: "A softball team on the IPL infield", button: { label: "Register", href: ask("6v6 Softball league registration") } },
    { tag: "League", eyebrow: "Fall 2026 · 10U", title: "6v6 Baseball League", text: "Small-sided games built for reps: every player hits every inning and fields every ball.", meta: "Dates and price announced at registration.", image: "/images/figma/cc2e2.webp", alt: "Young baseball players on the indoor turf", button: { label: "Register", href: ask("6v6 Baseball league registration") } },
    { tag: "League", eyebrow: "HP Throwing Program · Developing pitchers", title: "HP Futures Throwing Program", text: "Kyle Fedorka's group throwing program for developing pitchers. Mechanics, arm care and velocity in a small-group setting.", meta: "$300 per month, or $500 with 2SP lifting.", image: "/images/figma/8edc4.webp", alt: "A pitcher throwing in the IPL pitching tunnel", button: { label: "Join in Swift", href: swift.throwing.futuresThrowingOnly } },
  ],
};

export const team = {
  eyebrow: "Team training",
  heading: "Give your team a real practice.",
  text: "Book the infield and cages on a weekly slot, or bring Brandon Inge in to plan and run the practice. Organizations running 12 or more weeks get 15% off.",
  cta: { label: "See all team rates", href: "/training/team-rentals#rates" },
  items: [
    { tag: "Team training", eyebrow: "Field and cage combo · 60 to 120 minutes", title: "Team training block", text: "The full turf infield and cages reserved for your team, with HitTrax in every cage. Book a single block or hold the same slot all winter.", meta: "1 hour $200 · 1.5 hours $230 · 2 hours $500", image: "/images/figma/11101.webp", alt: "A team stretching on the IPL infield", button: { label: "Book a block in Swift", href: swift.rentals.fieldCombo90m } },
    { tag: "Team training", eyebrow: "Pro Practice · 8 to 12 players", title: "Pro Practice: Offensive", text: "Brandon Inge runs your hitting and baserunning practice. You coach, he plans and runs it.", meta: "60 minutes · $150 per session", image: "/images/figma/78fac.webp", alt: "Brandon Inge coaching a hitter in the cage", button: { label: "Book in Swift", href: swift.lessons.brandonProOffense } },
    { tag: "Team training", eyebrow: "Pro Practice · 8 to 12 players", title: "Pro Practice: Defensive", text: "Brandon Inge runs your infield and team defense practice. A big league practice, scaled to your roster.", meta: "60 minutes · $150 per session", image: "/images/infield-turf.webp", alt: "The full varsity turf infield at IPL", button: { label: "Book in Swift", href: swift.lessons.brandonProDefense } },
  ],
};

export const why = {
  eyebrow: "Camps and clinics",
  heading: "Why programs here are different.",
  text: "Our camps, clinics and leagues are run by the same coaches who teach our lessons, on the same infield, with HitTrax measuring every rep. Athletes leave with real numbers that show their progress, not a participation certificate.",
  image: "/images/hittrax/derby.webp",
  alt: "Young players watching HitTrax results on the big screen",
  button: { label: "Ask about upcoming camps", href: ask("Upcoming camps and clinics") },
};
