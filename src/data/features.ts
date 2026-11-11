/** All Features hub (/features). */
import { booking } from "@/data/home";
import type { Pathway } from "@/components/content/PathwayList.astro";

export const hero = {
  eyebrow: "The facility · Brighton, MI",
  title: "Everything you need for effective practice.",
  text: "Six HitTrax cages, a full varsity turf infield and a Division 1 caliber weight room, in 20,000 square feet in Brighton. This is the tour, page by page.",
  primary: { label: "Book a cage", href: booking },
  secondary: { label: "Book a tour", href: "/contact" },
};

export const strip = [
  { src: "/images/figma/47586.webp", alt: "A hitter in an IPL batting cage", href: "/batting-cages", label: "Batting Cages" },
  { src: "/images/figma/9ae85.webp", alt: "A coach pointing at a HitTrax screen", href: "/hittrax", label: "HitTrax" },
  { src: "/images/infield-turf.webp", alt: "The indoor turf infield", href: "/training#team-rentals", label: "The Infield" },
  { src: "/images/figma/28ee9.webp", alt: "Athletes training in The Den", href: "/the-den", label: "The Den" },
];

export const features: Pathway[] = [
  { id: "batting-cages", subheading: "Machines, video and room to actually swing.", label: "Batting Cages", eyebrow: "Six tunnels", heading: "Six cages. HitTrax in all of them.", text: "Wide tunnels with full net height, Jr. Hack Attack machines set for baseball or softball, and HitTrax video in every cage at no extra charge. Rent by the half hour or the hour.", image: "/images/figma/47586.webp", alt: "A hitter in an IPL batting cage", button: { label: "See the cages", href: "/batting-cages" } },
  { id: "hittrax", subheading: "Data your athlete can see after every rep.", label: "HitTrax", eyebrow: "Every swing measured", heading: "Every swing has a number.", text: "Exit velocity, launch angle, spray chart and replay after every swing. Included in every rental and every lesson. The reason progress here is measured, not guessed.", image: "/images/figma/9ae85.webp", alt: "A coach reviewing a HitTrax screen", button: { label: "How HitTrax works", href: "/hittrax" } },
  { id: "infield", subheading: "Real distances and real reads, no matter the weather.", label: "The Infield", eyebrow: "Full varsity turf", heading: "A full varsity field. Indoors.", text: "Built to softball dimensions and used by baseball and softball teams all winter. Full defensive practices, live reads, real distances. Booked by the block.", image: "/images/infield-turf.webp", alt: "The indoor turf infield", button: { label: "Team rentals", href: "/training#team-rentals" } },
  { id: "the-den", subheading: "Strength and speed work built for athletes, not gym-goers.", label: "The Den", eyebrow: "Powered by 2SP", heading: "A real weight room.", text: "Not a corner with a rack. Rotational power, arm care and speed, programmed by 2SP coaches for every athlete who walks in, whatever the sport.", image: "/images/figma/28ee9.webp", alt: "Athletes training in The Den", button: { label: "Explore The Den", href: "/the-den" } },
];
