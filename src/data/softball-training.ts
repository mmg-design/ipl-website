/** Softball Training page content (/training/softball). Section order follows Figma "Softball Training". */
import { training } from "@/data/home";
import { swift } from "@/data/swift";

/* Hero photo always matches this page's card in the Training dropdown. */
const navCard = training.find((t) => t.id === "softball")!;
const register = "/contact";
const l = swift.lessons;

export const hero = {
  eyebrow: "Softball and fastpitch training · Brighton, MI",
  title: "Expert-backed softball lessons and training, right here in Michigan.",
  text: "A full indoor turf infield, machines set for softball in every cage, and coaches who are in the fastpitch community year round. Not a baseball facility that tolerates softball.",
  image: navCard.image,
  primary: { label: "Book a lesson", href: "#rates" },
  secondary: { label: "Softball programs", href: "#programs" },
};

export const infield = {
  eyebrow: "The infield",
  heading: "A real infield for fastpitch, indoors.",
  text: "Travel teams run full defensive practices here in February. Pitchers work off a real distance. Infielders take reps at real angles. When the snow melts, nothing changes but the roof.",
  image: "/images/figma/11101.webp",
  alt: "Softball players working on the indoor turf infield",
};

export const coach = {
  eyebrow: "What we coach",
  heading: "Built for fastpitch, position by position.",
  text: "Not baseball lessons with a softball swapped in. Each track is coached by someone who plays or coaches fastpitch right now.",
  items: [
    {
      title: "Hitting",
      text: "Mechanics, approach and the short game, with HitTrax set to softball mode so the numbers actually mean something for fastpitch.",
      points: ["HitTrax in softball mode", "Slapping and short game", "Lessons with Jordan or Megan"],
      image: "/images/training/softball-cage.webp",
      alt: "A softball hitter loading in an IPL cage while a coach pitches",
      position: "45% 50%",
      button: { label: "See lesson rates", href: "#rates" },
    },
    {
      title: "Catching",
      text: "Receiving, blocking and throwing. The position most programs skip gets its own coach and its own lessons here.",
      points: ["Framing and receiving", "Blocking and transfers", "Lessons with Taylor"],
      image: "/images/figma/cc2e2.webp",
      alt: "Softball players working on the indoor turf field",
      button: { label: "See lesson rates", href: "#rates" },
    },
    {
      title: "Pitching",
      text: "Mechanics, spin and command, recorded on video every session, with strength and arm care in The Den to back it up.",
      points: ["Video every session", "Spin and command work", "Strength in The Den"],
      image: "/images/figma/11101.webp",
      alt: "Softball players warming up on the indoor turf",
      button: { label: "Softball clinics", href: "#programs" },
    },
  ],
};

export const community = {
  eyebrow: "Community",
  heading: "Built by people in the softball community.",
  text: "IPL has a strong softball following because the people coaching here coach travel ball, run teams and show up at tournaments. Your athlete trains with coaches who know the local fastpitch world, not rental clerks.",
  button: { label: "See lesson rates", href: "#rates" },
  image: "/images/figma/dc8a9.webp",
  alt: "The indoor turf infield at IPL",
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Lesson pricing.",
  text: "One on one. Book 30 or 60 minutes online. A deposit is paid at booking and the rest at the lesson.",
  tiers: [
    { name: "Jordan Humitz", price: "$85", note: "per hour, $60 per 30 minutes", features: ["Softball hitting", "HitTrax in softball mode", "30 or 60 minute lessons"], image: "/images/batting-cages/hero.webp", alt: "A hitter in an IPL cage", cta: { label: "Book a lesson", href: l.jordan60 } },
    { name: "Megan Bondy", price: "$110", note: "per hour, $65 per 30 minutes", features: ["Softball hitting", "HitTrax on every swing", "30 or 60 minute lessons"], image: "/images/batting-cages/hittrax.webp", alt: "A coach reviewing HitTrax data", cta: { label: "Book a lesson", href: l.megan60 } },
    { name: "Taylor Wagner", price: "$130", note: "per hour, $65 per 30 minutes", features: ["Softball catching", "Receiving, blocking and throwing", "30 or 60 minute lessons"], image: "/images/figma/cc2e2.webp", alt: "Players on the indoor field", cta: { label: "Book a lesson", href: l.taylor60 } },
  ],
};

export const coaches = {
  heading: "Coaches, not rental clerks.",
  text: "Playing history and coaching credentials. Nothing padded.",
  ctaText: "If you teach the right information, we want to talk.",
};

export const programs = {
  heading: "Softball camps, clinics and leagues.",
  items: [
    { title: "Winter hitting clinic", text: "Four weeks, one focus. HitTrax numbers before and after. Dates and pricing announced at registration.", image: "/images/batting-cages/machine.webp", alt: "A hitter in the cage", button: { label: "Register", href: register } },
    { title: "Fastpitch pitching clinic", text: "Mechanics and spin, with video. Dates and pricing announced at registration.", image: "/images/figma/8edc4.webp", alt: "A pitcher working with a coach", button: { label: "Register", href: register } },
    { title: "Indoor winter league", text: "Six on six on the full turf infield. Games count, standings are posted.", image: "/images/figma/11101.webp", alt: "Softball players on the indoor field", button: { label: "Register", href: register } },
  ],
};
