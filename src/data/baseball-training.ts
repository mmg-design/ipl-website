/** Baseball Training page content (/training/baseball). */
import { booking, contact, training } from "@/data/home";
import { swift } from "@/data/swift";

/* Hero photo always matches this page's card in the Training dropdown. */
const navCard = training.find((t) => t.id === "baseball")!;

const ask = (subject: string) => `${contact}?subject=${encodeURIComponent(subject)}`;

export const hero = {
  eyebrow: "Baseball lessons and training · Brighton, MI",
  title: "Expert-backed baseball lessons and training, right here in Michigan.",
  text: "Private baseball lessons, hitting lessons, small groups and team sessions on a full indoor infield, with HitTrax on every swing and a former big leaguer setting the standard. Ages 8 through college.",
  image: navCard.image,
  primary: { label: "Book a lesson", href: "#rates" },
  secondary: { label: "Baseball programs", href: "#programs" },
};

export const difference = {
  eyebrow: "The difference",
  heading: "The right information. The first time.",
  text: "Brandon's whole reason for building IPL was watching kids pay for years of bad instruction. You will not get drills that look busy. You will get the specific thing your athlete needs to fix, explained so they can keep fixing it when they leave.",
  points: [
    { title: "Individualized, not templated", text: "Every lesson starts from what the athlete actually does, on video and on HitTrax." },
    { title: "Take it with you", text: "The goal is an athlete who can coach themselves, not one who needs us twice a week forever." },
  ],
  button: { label: "Book a lesson", href: "#rates" },
  image: "/images/figma/b6040.webp",
  alt: "Brandon Inge coaching in the cage",
};

export const coach = {
  eyebrow: "What we coach",
  heading: "Three skills, coached by people who played them for a living.",
  text: "Private lessons, small groups or a full team. Every track is measured, so you see progress instead of hoping for it.",
  items: [
    {
      title: "Hitting",
      text: "Swing mechanics, approach and pitch recognition. Every rep in the cage is tracked on HitTrax, so exit velocity and launch angle tell you whether it's working, not a coach's opinion.",
      points: ["HitTrax on every swing", "Video breakdown of the swing", "30 or 60 minute lessons"],
      image: "/images/batting-cages/hero.webp",
      alt: "A hitter swinging in an IPL cage",
      position: "50% 40%",
      button: { label: "See lesson rates", href: "#rates" },
    },
    {
      title: "Fielding and infield",
      text: "Footwork, glove work and throwing at game speed on a full turf infield. Taught by a third baseman who spent 13 years in the majors.",
      points: ["Indoor turf infield", "Position-specific reps", "Pro defense sessions with Brandon"],
      image: "/images/figma/dc8a9.webp",
      alt: "The full turf infield at IPL",
      button: { label: "See the infield", href: "#infield" },
    },
    {
      title: "Pitching",
      text: "Mechanics, velocity and arm care through the High Performance Throwing Program, with strength work done with 2SP in The Den, all in one spot.",
      points: ["Video on every bullpen", "Arm care built into the plan", "Strength with 2SP in The Den"],
      image: "/images/figma/8edc4.webp",
      alt: "A pitcher throwing in the IPL pitching tunnel",
      position: "35% 30%",
      button: { label: "Explore pitching", href: "/training/pitching" },
    },
  ],
};

export const infield = {
  eyebrow: "Full indoor infield",
  heading: "A real field, indoors, all winter.",
  text: "Our turf infield is built to softball dimensions and used by baseball and softball teams all winter, so the reps your athlete takes in January carry straight into the spring. Teams book it by the block, and individual athletes use it in lessons. Nobody else in Livingston County has anything like it.",
  image: "/images/infield-turf.webp",
  alt: "The turf infield at IPL",
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Lesson pricing.",
  text: "One-on-one. Book 30 or 60 minutes online. Cage fee included.",
  tiers: [
    { name: "Brandon Inge", price: "$200", note: "per hour, $100 per 30 minutes", features: ["Hitting and fielding with a 13-year big leaguer", "HitTrax on every swing", "Video and written takeaways"], image: "/images/figma/78fac.webp", alt: "Brandon Inge coaching hitters", cta: { label: "Book a lesson", href: swift.lessons.brandon60 } },
    { name: "Rob Heumann", price: "$140", note: "per hour, $75 per 30 minutes", features: ["IPL lead hitting and fielding instructor", "Cage rental included", "HitTrax on every swing", "Small group options", "Ages 8 and up"], image: "/images/batting-cages/machine.webp", alt: "A hitter working in the cage", cta: { label: "Book a lesson", href: swift.lessons.rob60 } },
  ],
};

export const coaches = {
  heading: "Who you work with.",
  text: "Playing history and coaching credentials. Nothing padded.",
  ctaText: "If you teach the right information, we want to talk.",
};

export const programs = {
  heading: "Baseball camps, clinics and leagues.",
  items: [
    { title: "Winter skills camp", text: "Coming soon. Hitting, fielding and base running. Ages, dates and pricing will be posted here when registration opens.", image: "/images/hittrax/derby.webp", alt: "Young players at an IPL camp", button: { label: "Get notified", href: ask("Baseball winter skills camp") } },
    { title: "Winter hitting clinic", text: "Coming soon. Four weeks, one focus, with HitTrax numbers before and after. Dates and pricing will be posted here.", image: "/images/batting-cages/machine.webp", alt: "A hitter in the cage", button: { label: "Get notified", href: ask("Baseball winter hitting clinic") } },
    { title: "6v6 winter league", text: "6v6 on the turf infield, with live reps in a fast-paced, competitive environment during the off-season.", image: "/images/figma/cc2e2.webp", alt: "Players on the indoor field", button: { label: "Email us to join", href: ask("6v6 Baseball league") } },
  ],
};
