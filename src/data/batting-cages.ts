/** Batting Cages feature page content. Shapes match the reusable feature-page components. */
import { booking } from "@/data/home";

export const hero = {
  eyebrow: "Batting cage rentals · Brighton, MI",
  title: "Get the reps in with batting cage rentals.",
  text: "Six wide tunnels. Jr. Hack Attack machines set for baseball or softball. HitTrax with video in every cage, included. Book by the half hour or the hour, online, in under a minute.",
  image: "/images/batting-cages/hero.webp",
  primary: { label: "Book a cage", href: booking },
  secondary: { label: "See memberships", href: "/#memberships" },
};

export const included = {
  eyebrow: "What you get",
  heading: "Everything is included. Nothing is an upcharge.",
  text: "Other places charge extra for the machine, extra for the technology, and hand you a bucket of balls that were worn out in 2023. Here the cage is the cage.",
  items: [
    { tag: "Technology", title: "HitTrax with video", text: "Exit velocity, launch angle, spray chart and replay after every swing. Running in all six tunnels.", image: "/images/batting-cages/hittrax.webp", alt: "A coach pointing at HitTrax swing data on a screen" },
    { tag: "Machines", title: "Jr. Hack Attack machines", text: "Three-wheel machines that throw real movement, set for baseball or softball in seconds.", image: "/images/batting-cages/machine.webp", alt: "A hitter loading against a Jr. Hack Attack machine" },
    { tag: "Equipment", title: "Game-quality balls", text: "Balls are inspected and refreshed often.", image: "/images/batting-cages/hero.webp", alt: "A hitter swinging in a batting cage" },
    { tag: "Space", title: "Room to actually hit", text: "Wide tunnels, full net height, bright lighting.", image: "/images/figma/dc8a9.webp", alt: "The indoor turf field and lighting at IPL" },
  ],
};

export const pricing = {
  eyebrow: "Rates",
  heading: "Transparent and flexible pricing.",
  text: "Book online for the best rates. Machine and HitTrax included in every cage.",
  tiers: [
    { name: "1 cage", price: "$35", note: "per 30 minutes, $60 per hour", features: ["One tunnel", "Jr. Hack Attack included", "HitTrax included"], image: "/images/batting-cages/hero.webp", alt: "A hitter in a single cage", cta: { label: "Book", href: booking } },
    { name: "2 cages", price: "$55", note: "per 30 minutes, $110 per hour", features: ["Two tunnels side by side", "Machines included", "HitTrax included", "Most booked by groups"], image: "/images/batting-cages/machine.webp", alt: "A hitter in a cage next to a pitching machine", cta: { label: "Book", href: booking } },
    { name: "3 cages", price: "$80", note: "per 30 minutes, $160 per hour", features: ["Three tunnels", "Machines included", "HitTrax included", "Small team work", "Need the infield? See Team Rentals"], image: "/images/batting-cages/team.webp", alt: "Players reviewing HitTrax data together", cta: { label: "Book", href: booking } },
  ],
};

export const hittrax = {
  eyebrow: "In every cage",
  heading: "Every rep is calibrated and measured.",
  text: "HitTrax turns a cage session into data. After each swing you see exit velocity, launch angle and where the ball would have landed on a real field. Over a month, you see whether the work is working. Most facilities charge for this or do not have it. Here it runs in all six cages and costs nothing on top of the rental.",
  button: { label: "How HitTrax works", href: "/hittrax" },
  image: "/images/batting-cages/hittrax.webp",
  alt: "A coach reviewing HitTrax results on a screen",
};

export const ways = {
  heading: "Three ways to use a cage.",
  items: [
    { title: "Open hitting", text: "Rent a tunnel, bring your own group, run your own work. Wide enough that a coach can stand in and work with the hitter.", image: "/images/batting-cages/hero.webp", alt: "A hitter taking open swings", button: { label: "Book a cage", href: booking } },
    { title: "Lesson in the cage", text: "Thirty or sixty minutes with a coach, HitTrax report at the end.", image: "/images/batting-cages/machine.webp", alt: "A hitter working in a cage", button: { label: "Book a lesson", href: booking } },
    { title: "Team block", text: "Multiple cages plus the infield for a full practice.", image: "/images/figma/11101.webp", alt: "A softball team running drills on the indoor field", button: { label: "Team rentals", href: "/#programs" } },
  ],
};

export const faqs = {
  heading: "Common questions.",
  text: "Answered in plain text.",
  items: [
    { question: "How much are batting cages in Brighton?", answer: "A single cage is $35 for thirty minutes and $60 for the hour, with the pitching machine and HitTrax included. There is no equipment fee and no technology fee." },
    { question: "Do I need my own bat and helmet?", answer: "Bring your own if you have them. We keep loaner helmets and a few bats at the desk for anyone who forgets." },
    { question: "Can adults rent a cage?", answer: "Yes. Adult rec, slow pitch and men's league players book here all winter. Same rates, same equipment." },
    { question: "What is the cancellation policy?", answer: "Cancel or move a cage booking up to 24 hours ahead at no charge. Inside 24 hours the slot is paid, because nobody else can take it." },
    { question: "Can I bring a group?", answer: "A small group fits comfortably. For a full roster, book two cages or look at a team block." },
  ],
};
