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
  text: "Our 6v6 leagues give athletes live reps in a fast-paced, competitive environment all off-season. Team blocks hold your slot all winter, and Pro Practice sessions are planned and run start to finish by Brandon Inge. Camps and clinics are posted here as they open.",
  image: "/images/figma/cc2e2.webp",
  primary: { label: "See leagues", href: "#leagues" },
  secondary: { label: "Team training", href: "#team-training" },
};

export const leagues = {
  eyebrow: "Leagues",
  heading: "6v6, indoors, all winter.",
  text: "6v6 games on our turf infield, built to softball dimensions. It is about live reps in a fast-paced, competitive environment during the off-season: every player hits every inning and fields every ball.",
  items: [
    { tag: "League", eyebrow: "Winter 2027 · 10U, 12U, 14U", title: "6v6 Softball League", text: "6v6 fastpitch games on the turf infield, built to softball dimensions. Live reps in a fast-paced, competitive environment.", meta: "Email us for dates, pricing and to join.", image: "/images/figma/9aeaf.webp", alt: "A softball team on the IPL infield", button: { label: "Email us to join", href: ask("6v6 Softball league") } },
    { tag: "League", eyebrow: "Fall 2026 · 10U", title: "6v6 Baseball League", text: "Small-sided games built for reps: every player hits every inning and fields every ball.", meta: "Email us for dates, pricing and to join.", image: "/images/figma/cc2e2.webp", alt: "Young baseball players on the indoor turf", button: { label: "Email us to join", href: ask("6v6 Baseball league") } },
    { tag: "Program", eyebrow: "High Performance · Baseball pitchers", title: "HP Throwing Program", text: "Kyle Fedorka and Jarret Olson's group throwing program. Mechanics, arm care and velocity in a small-group setting, with levels for developing and high school pitchers.", meta: "See program levels and pricing in Swift.", image: "/images/figma/8edc4.webp", alt: "A pitcher throwing in the IPL pitching tunnel", button: { label: "See program levels", href: swift.throwing.levels } },
  ],
};

export const team = {
  eyebrow: "Team training",
  heading: "Give your team a real practice.",
  text: "Book the infield and cages on a weekly slot, or bring Brandon Inge in to plan and run the practice. Contact us to schedule. Teams that commit to 12 weeks or more receive a discount.",
  cta: { label: "See all team rates", href: "/training/team-rentals#rates" },
  items: [
    { tag: "Team training", eyebrow: "Field and cage combo · 60 to 120 minutes", title: "Team training block", text: "The full turf infield and cages reserved for your team, with HitTrax in every cage. Reserve a single block or hold the same slot all winter.", meta: "1 hour $200 · 1.5 hours $230 · 2 hours $500", image: "/images/figma/11101.webp", alt: "A team stretching on the IPL infield", button: { label: "Contact us to schedule", href: ask("Team training block") } },
    { tag: "Team training", eyebrow: "Pro Practice · 8 to 12 players", title: "Pro Practice: Offensive", text: "Brandon Inge runs your hitting and baserunning practice. You coach, he plans and runs it.", meta: "60 minutes · $160 cage rental + $20 per player", image: "/images/figma/78fac.webp", alt: "Brandon Inge coaching a hitter in the cage", button: { label: "Contact us to schedule", href: ask("Pro Practice: Offensive") } },
    { tag: "Team training", eyebrow: "Pro Practice · 8 to 12 players", title: "Pro Practice: Defensive", text: "Brandon Inge runs your infield and team defense practice. A big league practice, scaled to your roster.", meta: "60 minutes · $150 field rental + $20 per player", image: "/images/infield-turf.webp", alt: "The turf infield at IPL", button: { label: "Contact us to schedule", href: ask("Pro Practice: Defensive") } },
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
