/** Pitching page content (/training/pitching). */
import { swift } from "@/data/swift";
import { contact } from "@/data/home";

export const hero = {
  eyebrow: "Pitching lessons · High Performance Training at IPL",
  title: "Expert-backed pitching lessons and training, right here in Michigan.",
  text: "Pitching at IPL runs through the High Performance Throwing Program, so mechanics, velocity and arm care get coached together instead of one at a time. Every lesson is recorded, and your athlete can strengthen next door in The Den the same day.",
  image: "/images/figma/8edc4.webp",
  primary: { label: "Book a lesson", href: swift.lessons.hp60 },
};

export const approach = {
  eyebrow: "The approach",
  heading: "Three things, in order.",
  text: "Velocity without mechanics is an injury waiting to happen. We go in sequence.",
  items: [
    { title: "Mechanics first", text: "Clean up the delivery before adding anything to it. Video every session.", points: ["Video on every bullpen", "One delivery fix at a time", "Lessons with Kyle"], image: "/images/figma/8edc4.webp", alt: "A pitcher mid-delivery in the IPL tunnel" },
    { title: "Then velocity", text: "Add speed on a sound base, with a plan, not a radar gun and a dare.", points: ["Velocity built on sound mechanics", "Weighted ball work when ready", "Tracked lesson to lesson"], image: "/images/the-den/den-med-ball-throws.webp", alt: "Athletes doing med ball throws in The Den" },
    { title: "Arm care always", text: "Programmed with 2SP in The Den so the gains hold through the season.", points: ["Arm care with 2SP in The Den", "Recovery built into every plan", "Available without lessons"], image: "/images/the-den/den-band-lateral.webp", alt: "An athlete doing banded work in The Den" },
  ],
};

export const model = {
  eyebrow: "The model",
  heading: "Throw, then walk next door and get stronger.",
  text: "This is the part no other facility in the area can do. A pitcher works with Kyle on the mound, then walks to The Den and does the strength and arm care work that supports it, in the same hour, under the same roof.",
  points: [
    { title: "One plan", text: "HP and 2SP build the program together. The athlete does not get two conflicting sets of instructions." },
    { title: "One building", text: "No driving between a pitching coach and a gym." },
  ],
  button: { label: "Book a lesson", href: swift.lessons.hp60 },
  image: "/images/figma/28ee9.webp",
  alt: "Athletes training in The Den",
};

export const tools = {
  eyebrow: "Measured progress",
  heading: "Video, data, and reps.",
  text: "Every lesson is recorded, so athletes see exactly what their coach sees. HitTrax tracks every swing, and progress is measured from one lesson to the next instead of guessed at. Your athlete leaves knowing what improved and what to work on next.",
  image: "/images/the-den/den-force-plate.webp",
  alt: "An athlete testing on a force plate with coaches watching",
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Lesson pricing.",
  text: "One on one. Book 30 or 60 minutes online.",
  tiers: [
    { name: "HP Throwing Program", price: "$130/hr", note: "$65 per 30 minutes", features: ["Kyle Fedorka, Director of Pitching Development", "Mechanics, velocity, arm care", "Video every session"], image: "/images/figma/8edc4.webp", alt: "A pitcher throwing in the tunnel", cta: { label: "Book a lesson", href: swift.lessons.hp60 } },
    { name: "Pitching instructors", price: "$150/hr", note: "$75 per 30 minutes", features: ["A.J. Achter and Tim Day", "$50 facility fee booked online, $100 to trainer at lesson", "Former pro pitchers", "Baseball and fastpitch options"], image: "/images/batting-cages/machine.webp", alt: "An athlete working in a cage", cta: { label: "Buy a pack", href: `${contact}?subject=Pitching%20lesson%20pack` } },
  ],
};

export const faqs = {
  heading: "Pitching questions.",
  text: "The short version.",
  items: [
    { question: "What age can start?", answer: "Most athletes start structured pitching work once they can hold a routine, usually late elementary or early middle school. Younger than that, we focus on throwing mechanics and athleticism." },
    { question: "Do you coach fastpitch?", answer: "Yes. Fastpitch is coached by our softball staff and the mechanics work is built for the windmill delivery, not borrowed from a baseball plan." },
    { question: "How often should my pitcher come?", answer: "Once a week during the off season is the standard. More than that without the strength work is not better." },
    { question: "Do you do arm care only?", answer: "Yes. Arm care programming through The Den is available without lessons." },
    { question: "Can a parent sit in?", answer: "Yes. We would rather you hear it from the coach than from your kid in the car." },
  ],
};
