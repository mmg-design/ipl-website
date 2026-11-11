/** The Den feature page content. Baseball and softball first, open to every sport (per Shani's note). */
import { booking } from "@/data/home";
import { swift } from "@/data/swift";
import { denClips } from "@/data/media";

export const hero = {
  eyebrow: "Baseball and softball strength training · Michigan",
  title: "Training built for the sport you play.",
  text: "The Den is a Division 1 caliber weight room inside IPL, run by 2SP. Rotational power, arm care, speed, agility and durability, programmed for baseball and softball athletes first. Every other sport is welcome on the floor too.",
  image: "/images/the-den/den-force-plate.webp",
  primary: { label: "Book a session", href: booking },
  secondary: { label: "See memberships", href: "/memberships" },
  media: {
    clips: [denClips.boxJump, denClips.trapBar, denClips.sledPush, denClips.splitSquat, denClips.stepUp, denClips.forcePlate],
  },
};

export const packages = {
  eyebrow: "Flexible packages",
  heading: "Drop in or buy a pack.",
  text: "No membership required. Same floor, same coaches.",
  items: [
    { title: "Drop-in session", text: "$60 for a single session. Show up, train, leave.", image: "/images/the-den/den-hex-bar.webp", alt: "An athlete pulling a hex bar in The Den" },
    { title: "10 session package", text: "$450. Ten sessions, use them on your schedule.", image: "/images/the-den/den-band-lateral.webp", alt: "An athlete doing banded lateral work in The Den" },
    { title: "20 session package", text: "$800. The best per-session rate in the building.", image: "/images/the-den/den-sprint-start.webp", alt: "An athlete driving out of a sprint start" },
  ],
};

export const room = {
  eyebrow: "The room",
  heading: "Racks, turf, sleds, space.",
  text: "Platforms and racks, open turf for sled and med ball work, and the space to run a full group without waiting on a station. 2SP coaches are on the floor for every session.",
  button: { label: "Book a tour", href: booking },
  image: "/images/the-den/den-trap-bar.webp",
  video: denClips.trapBar.src,
  alt: "An athlete doing trap bar deadlifts in front of the racks",
};

export const twoSP = {
  heading: "2SP builds the athlete. IPL makes the ballplayer.",
  text: "2SP is the foundation for every athlete who comes through IPL. They build strength, speed and agility, then IPL and HP sharpen the baseball and softball player. Hockey, soccer, football and basketball athletes train in The Den all year too.",
  button: { label: "Learn more about 2SP", href: "#programs" },
  image: "/images/the-den/den-med-ball-group.webp",
  video: denClips.sledPush.src,
  alt: "2SP coaches running a sled push in The Den",
};

export const programs = {
  eyebrow: "Programs",
  heading: "Pick your program.",
  text: "Three monthly programs, plus drop-in and session packages for anyone.",
  tiers: [
    { name: "Foundations", price: "$199/mo", note: "ages 13 and under", features: ["Movement quality, coordination, speed and strength", "Age-appropriate programming", "2SP coach on the floor"], image: "/images/the-den/den-med-ball-throws.webp", alt: "Young athletes doing med ball throws in The Den", cta: { label: "Join", href: swift.memberships.denFoundations } },
    { name: "Performance Training Lite", price: "$320/mo", note: "ages 14 and up", features: ["Performance Training programming", "[Sessions per week: confirm with Shani]", "2SP coach on the floor"], image: "/images/the-den/den-med-ball-group.webp", alt: "A group doing med ball work in The Den", cta: { label: "Join", href: swift.memberships.denPerformanceLite } },
    { name: "Performance Training", price: "$400/mo", note: "ages 14 and up", features: ["Structured small-group training", "Strength, speed, power, agility and movement efficiency", "Proven performance methods", "Return-to-play and in-season cycles", "Coach on the floor"], image: "/images/the-den/den-trap-bar.webp", alt: "An athlete lifting in The Den", imagePosition: "50% 0%", cta: { label: "Join", href: swift.memberships.denPerformance } },
  ],
};

export const clips = {
  eyebrow: "Inside The Den",
  heading: "This is what a session looks like.",
  text: "Real athletes, real sessions, filmed on the floor at IPL.",
  clips: [denClips.boxJump, denClips.sledPush, denClips.trapBar, denClips.forcePlate, denClips.splitSquat, denClips.hexBar, denClips.plateRotation, denClips.stepUp, denClips.sprint],
};

export const faqs = {
  heading: "Questions about The Den.",
  text: "Straight answers before your first session.",
  items: [
    { question: "Do you train athletes from other sports?", answer: "Yes. Baseball and softball come first, but 2SP trains every athlete who walks in. Hockey, soccer, football and basketball players train in The Den all year." },
    { question: "Who runs The Den?", answer: "2SP Sports Performance. Every session has a 2SP coach on the floor, and individual programs are built by the 2SP Director of Strength and Conditioning." },
    { question: "What age can my athlete start?", answer: "Foundations is built for athletes 13 and under, with age-appropriate work on movement quality, coordination, speed and strength. Performance Training is for athletes 14 and up." },
    { question: "Is strength training safe for youth athletes?", answer: "Done right, yes. Young athletes start with movement quality and bodyweight control before load is added, and a coach is on the floor for every rep." },
    { question: "Do I need a membership to train in The Den?", answer: "No. Drop in for $60, or buy a 10 session pack for $450 or a 20 session pack for $800. Monthly programs start at $199." },
    { question: "Can my athlete train in season?", answer: "Yes. Programs run return-to-play and in-season cycles, so athletes keep strength through the season without wearing down." },
    { question: "Can I combine The Den with cage time?", answer: "Yes. Platinum memberships include unlimited cage sessions plus a custom 2SP program in The Den, two or three sessions a week depending on age." },
    { question: "Do you program arm care for pitchers?", answer: "Yes. Arm care is built into the programming and coordinated with High Performance Training, so pitchers get stronger without conflicting plans." },
    { question: "Where is The Den?", answer: "Inside Inge Performance Lab at 8101 Movie Drive, Brighton, MI 48116. Athletes train with us from Brighton, Howell, Pinckney, South Lyon and Hartland." },
  ],
};
