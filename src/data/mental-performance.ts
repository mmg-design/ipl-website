/** Mental Performance page content (/training/mental-performance). Champion Mindset Group (CMG). */
import { contact, training } from "@/data/home";

/** CMG handles its own booking. */
export const cmg = "https://champmindset.com";
const ask = `${contact}?subject=Mental%20performance`;
const navCard = training.find((t) => t.id === "mental-performance")!;

export const hero = {
  eyebrow: "Champion Mindset Group · Exclusive Partner",
  title: "Enhance your game between the ears.",
  text: "Every big league clubhouse has a mental skills coach. Now IPL does. Confidence, focus and routines, taught like any other skill, for athletes who have the tools and freeze when it counts.",
  image: navCard.image,
  primary: { label: "Book a session", href: cmg },
  secondary: { label: "Ask a question", href: ask },
};

export const skills = {
  eyebrow: "What gets worked on",
  heading: "Build skills that help on and off the diamond.",
  text: "Repeatable habits an athlete runs on their own by the end of the season.",
  items: [
    {
      title: "Pre-pitch routine",
      text: "A four second reset that works in the box, on the mound and in the field. Same routine, every pitch, so the athlete walks into every rep with a clear head.",
      points: ["A reset that fits between pitches", "The same routine in practice and in games", "Works at the plate, on the mound and in the field"],
      image: "/images/training/softball-cage.webp",
      alt: "A softball hitter getting set in an IPL cage",
      position: "45% 50%",
      button: { label: "Book a session", href: cmg },
    },
    {
      title: "Failure recovery",
      text: "The next at-bat after the strikeout. The next pitch after the walk. Athletes learn to let the last play go, so one mistake stops turning into a bad inning.",
      points: ["Letting go of the last pitch", "Self-talk that stays useful", "A plan for the very next rep"],
      image: "/images/batting-cages/hero.webp",
      alt: "A hitter swinging in an IPL cage",
      position: "50% 40%",
      button: { label: "Book a session", href: cmg },
    },
    {
      title: "Pressure",
      text: "Playing the same in the seventh inning as the first, and in the championship as the scrimmage. For individual athletes and for whole rosters.",
      points: ["Focus and nerves under stress", "Visualization before big games", "Team habits that hold up in tournaments"],
      image: "/images/figma/9aeaf.webp",
      alt: "A team sitting together on the IPL turf",
      button: { label: "Team sessions", href: "#who" },
    },
  ],
};

export const audience = {
  eyebrow: "Who it's for",
  heading: "Athletes, parents, teams.",
  text: "The athlete who dominates practice and disappears in games. The pitcher who can't get the ball back after one bad call. The team that plays tight in tournaments.",
  points: [
    { title: "One on one", text: "Private sessions with a Champion Mindset coach, in person at their Birmingham office or virtually." },
    { title: "Teams and groups", text: "Workshops for a roster, team camps at IPL, or a parent session on what to say on the car ride home." },
  ],
  button: { label: "Book a session", href: cmg },
  image: "/images/about/values-expertise.webp",
  alt: "A coach talking with a team gathered on the IPL turf",
};

export const partner = {
  logo: { src: "/images/figma/73872.webp", alt: "Champion Mindset Group" },
  heading: "Sport psychology, coached like a skill.",
  text: "Champion Mindset Group was founded by Dr. Jason Novetsky, a sport and performance psychology coach and former Division I athlete. The work pairs evidence-based sport psychology with Stoic principles, and it sits alongside 2SP and High Performance Training in how IPL develops athletes.",
  people: [
    { name: "Dr. Jason Novetsky", role: "Founder", image: "/images/coaches/cmg-jason.webp" },
    { name: "Kelsey Reiter, MS", role: "Mental performance coach", image: "/images/coaches/cmg-kelsey.webp" },
    { name: "Sammi Woods, MS", role: "Mental performance coach", image: "/images/coaches/cmg-sammi.webp" },
  ],
  button: { label: "Visit Champion Mindset", href: cmg },
};

export const faqs = {
  heading: "Mental performance questions.",
  text: "What parents ask before the first session.",
  items: [
    { question: "What is mental performance coaching?", answer: "Training the skills that decide how an athlete plays under pressure: confidence, focus, routines and how they respond to mistakes. It gets coached and practiced like a swing or a delivery, not talked about once and forgotten." },
    { question: "Is this therapy?", answer: "No. This is performance coaching for sport: routines, focus, confidence and handling pressure. If you're looking for clinical mental health care, start with your athlete's doctor." },
    { question: "Where do sessions happen?", answer: "Private sessions are in person at Champion Mindset Group's office in Birmingham, Michigan, or virtual from home. Team workshops, camps and special events can run at IPL." },
    { question: "How much does it cost?", answer: "Champion Mindset Group sets its own rates and handles booking. IPL athletes get 10% off their first private session. Mention IPL when you book." },
    { question: "How do I book?", answer: "Book directly with Champion Mindset Group at champmindset.com. Have a question first? Contact IPL and we'll point you to the right coach." },
    { question: "Can my whole team do this?", answer: "Yes. Champion Mindset Group runs team development on communication, leadership and shared routines, and joins IPL camps and special events. Contact us to set one up." },
    { question: "What ages do you work with?", answer: "[Confirm age range with Champion Mindset Group.]" },
  ],
};
