/** The Den feature page content. Copy from Abe (2SP); the FAQ covers other sports and links to 2SP. */
import { swift } from "@/data/swift";
import { denClips } from "@/data/media";

export const hero = {
  eyebrow: "Speed and Agility Training · Sports Performance by 2SP",
  h1Eyebrow: true,
  title: "Building Better Humans Through Sport",
  text: "The Den powered by 2SP Sports delivers speed and agility training, baseball strength training and a comprehensive sports performance experience designed to develop stronger, faster, and more explosive athletes. Through individualized programming, expert coaching, and a commitment to long-term athletic development, we prepare athletes to perform at their highest level.",
  image: "/images/the-den/den-force-plate.webp",
  primary: { label: "Book Free Assessment", href: "#free-assessment" },
  secondary: { label: "See memberships", href: "#memberships" },
  media: {
    clips: [denClips.boxJump, denClips.trapBar, denClips.sledPush, denClips.splitSquat, denClips.stepUp, denClips.forcePlate],
  },
};

/* Every Den option in one place at the top of the page (per Abe): monthly memberships, then packs and drop-ins. */
export const memberships = {
  id: "memberships-title",
  eyebrow: "Pricing",
  heading: "Memberships",
  text: "Where Grit Fuels Growth. Three monthly programs by age.",
  tiers: [
    { name: "Performance Training", price: "$400/mo", note: "ages 12 to 18", description: "Comprehensive strength and conditioning designed to maximize athletic performance through 12 coach-led training sessions per month.", features: ["12 coach-led sessions a month", "Strength, speed and conditioning", "Led by a certified strength coach"], image: "/images/the-den/den-trap-bar.webp", alt: "An athlete lifting in The Den", imagePosition: "50% 0%", cta: { label: "Join", href: swift.memberships.denPerformance } },
    { name: "Performance Training Lite", price: "$320/mo", note: "ages 12 to 18", description: "A flexible performance training option offering 8 coach-led sessions per month to build strength, speed, and athleticism.", features: ["8 coach-led sessions a month", "Strength, speed and athleticism", "Led by a certified strength coach"], image: "/images/the-den/den-med-ball-group.webp", alt: "A group doing med ball work in The Den", cta: { label: "Join", href: swift.memberships.denPerformanceLite } },
    { name: "Foundations", price: "$199/mo", note: "ages 9 to 11", description: "Introduce young athletes to proper movement mechanics, coordination, and foundational strength through 8 age-appropriate sessions per month in a group.", features: ["8 group sessions a month", "Movement, coordination and strength", "Age-appropriate programming"], image: "/images/the-den/den-med-ball-throws.webp", alt: "Young athletes doing med ball throws in The Den", cta: { label: "Join", href: swift.memberships.denFoundations } },
  ],
};

export const packs = {
  id: "packs-title",
  eyebrow: "No membership needed",
  heading: "Session packs and drop-ins",
  text: "Same floor, same coaches, on your schedule.",
  tiers: [
    { name: "10-Session Pack", price: "$450", note: "ages 12 and up", description: "Ten Performance Training sessions to use on your own schedule.", features: ["10 coach-led sessions", "Book any open session", "Good for 6 months"], cta: { label: "Buy the pack", href: swift.packages.den10 } },
    { name: "Drop-In", price: "$60", note: "per session", description: "One coach-led session. Show up, train, leave.", features: ["Single coach-led session", "No commitment", "Book in Swift"], cta: { label: "Book a session", href: swift.classes } },
  ],
};

export const assessment = {
  text: "Not sure which program fits? Start with a free assessment.",
  button: { label: "Book a Free Assessment", href: "#free-assessment" },
};

export const room = {
  eyebrow: "The room",
  heading: "Racks, turf, sleds, space.",
  text: "Platforms and racks, open turf for sled and med ball work, and the space to run a full group without waiting on a station. 2SP coaches are on the floor for every session.",
  button: { label: "Book a Free Assessment", href: "#free-assessment" },
  image: "/images/the-den/den-trap-bar.webp",
  video: denClips.trapBar.src,
  alt: "An athlete doing trap bar deadlifts in front of the racks",
};

export const twoSP = {
  heading: "2SP builds the athlete. IPL makes the ballplayer.",
  text: "2SP is the foundation for every athlete who comes through IPL. They build strength, speed and agility, then IPL and HP sharpen the baseball and softball player.",
  button: { label: "See memberships", href: "#memberships" },
  image: "/images/the-den/den-med-ball-group.webp",
  video: denClips.sledPush.src,
  alt: "2SP coaches running a sled push in The Den",
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
    { question: "Do you train athletes from other sports?", answer: "Yes. The Den is built around baseball and softball, but 2SP Sports Performance trains athletes in every sport, including hockey, soccer, football and basketball.", link: { label: "Visit 2SP Sports Performance", href: "https://www.2spsports.com" } },
    { question: "Who runs The Den?", answer: "2SP Sports Performance. Individual programs are built by the 2SP Director of Strength and Conditioning." },
    { question: "Are the training sessions led by a coach?", answer: "Yes. Every session in The Den is led by a Certified Strength and Conditioning Specialist." },
    { question: "How old do they need to be to train in The Den?", answer: "Our Foundations sessions accept ages 9 through 11. Our Performance Training sessions accept ages 12 through 18." },
    { question: "What do sessions look like for ages 11 and under?", answer: "Our Foundations group emphasizes proper technique and fundamental movement patterns in strength training, speed development, and plyometrics. This program is designed to build a strong athletic foundation that supports long-term development." },
    { question: "Is strength training safe for youth athletes?", answer: "Done right, yes. Young athletes start with movement quality and bodyweight control before load is added, and a coach is on the floor for every rep." },
    { question: "Do I need a membership to train in The Den?", answer: "No. Drop in for $60 a session or buy a 10-session pack for $450. Monthly programs start at $199. Not sure which fits? Book a free assessment." },
    { question: "Can my athlete train in season?", answer: "Yes. Programs run return-to-play and in-season cycles, so athletes keep strength through the season without wearing down." },
    { question: "Can I combine The Den with cage time?", answer: "Yes. Platinum memberships include unlimited cage sessions plus a custom 2SP program in The Den, two or three sessions a week depending on age." },
    { question: "Do you program arm care for pitchers?", answer: "Yes. Arm care is built into the programming and coordinated with High Performance Training, so pitchers get stronger without conflicting plans." },
    { question: "Where is The Den?", answer: "Inside Inge Performance Lab at 8101 Movie Drive, Brighton, MI 48116. Athletes train with us from Brighton, Howell, Pinckney, South Lyon and Hartland." },
  ],
};
