/** HitTrax feature page content. */
import { booking } from "@/data/home";

export const hero = {
  eyebrow: "HitTrax batting cages · Livingston County, MI",
  title: "Deeply understand and improve your swing.",
  text: "HitTrax tracks exit velocity, launch angle, distance and spray, with video replay, live after every swing. It runs in all six IPL tunnels and it is included with every cage rental and lesson.",
  image: "/images/batting-cages/hittrax.webp",
  primary: { label: "Book a cage", href: booking },
  secondary: { label: "Book a lesson", href: booking },
};

export const tracks = {
  eyebrow: "What it tracks",
  heading: "The three numbers every hitter should know.",
  text: "Not every stat matters. These three do.",
  items: [
    { title: "Exit velocity", text: "How hard the ball leaves the bat. The single best predictor of how far it goes.", image: "/images/batting-cages/hittrax.webp", alt: "A coach pointing at exit velocity on a HitTrax screen" },
    { title: "Launch angle", text: "How high it leaves. Too low is a ground ball, too high is a pop up. The window in between is where hits live.", image: "/images/batting-cages/hero.webp", alt: "A hitter driving a ball in the cage" },
    { title: "Spray chart", text: "Where it would have landed on a real field. Shows whether a hitter is using the whole field or pulling off everything.", image: "/images/batting-cages/team.webp", alt: "Players next to a HitTrax spray chart screen" },
  ],
};

export const use = {
  eyebrow: "How we use it",
  heading: "Coaches read it. Athletes learn it.",
  text: "A lesson at IPL ends with a report, not an opinion. The athlete sees the change in the numbers the same day, and the parent sees it too.",
  points: [
    { title: "In a lesson", text: "The coach sets a target, the athlete swings, the screen tells the truth. Adjust, repeat, confirm." },
    { title: "On your own", text: "Rent a cage and run your own session. Watch exit velo climb over a month of work." },
  ],
  button: { label: "Book a lesson", href: booking },
  image: "/images/batting-cages/team.webp",
  alt: "Young hitters next to a HitTrax screen in the cage",
};

export const beyond = {
  eyebrow: "Beyond the cage",
  heading: "Games, leaderboards, derbies.",
  text: "HitTrax also runs simulated games, so a cage session can turn into live at-bats with real numbers behind them.",
  items: [
    { tag: "Games", title: "Sim games", text: "Hit against real pitching in a virtual park. Box score at the end.", image: "/images/batting-cages/hittrax.webp", alt: "A HitTrax simulated game on screen" },
    { tag: "Rankings", title: "Facility leaderboards", text: "Rankings by exit velo and distance, by age group.", image: "/images/figma/cc2e2.webp", alt: "Softball players on the indoor field" },
    { tag: "Events", title: "Home run derby", text: "Team events and birthdays that are actually about baseball.", image: "/images/hittrax/derby.webp", alt: "A group of young players at an IPL event" },
    { tag: "Data", title: "Session reports", text: "Take your numbers with you.", image: "/images/batting-cages/team.webp", alt: "Players reviewing a HitTrax session report" },
  ],
};

export const faqs = {
  heading: "HitTrax questions.",
  text: "The short version.",
  items: [
    { question: "Is HitTrax extra?", answer: "No. It runs in every cage and is included in every rental and lesson." },
    { question: "Can I get my data after the session?", answer: "Your session saves to a player profile, so the numbers are waiting the next time you come in." },
    { question: "Does it work for softball?", answer: "Yes. HitTrax has a softball mode with the right ball weight and field dimensions." },
    { question: "Do I need an account?", answer: "Not to use it. You need one to keep a history across sessions." },
    { question: "Can a coach review it with me?", answer: "Every lesson ends with the report on screen." },
  ],
};
