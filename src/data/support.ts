/** Donation requests page content (/support). Organizations ask IPL to support their event or cause. */

const request = "#request";

export const hero = {
  eyebrow: "Donation requests · Livingston County, MI",
  title: "Request a donation from IPL.",
  text: "We support the schools, teams and nonprofits that support young athletes in our community. If your organization is planning an event or fundraiser, tell us about it and request a donation.",
  primary: { label: "Request a donation", href: request },
  secondary: { label: "Contact us", href: "/contact" },
};

/** Community and family shots, so this hero reads differently from the Training hub's. */
export const collage = [
  { src: "/images/blog/parents.webp" },
  { src: "/images/figma/9aeaf.webp" },
  { src: "/images/about/values-expertise.webp" },
  { src: "/images/hittrax/derby.webp" },
  { src: "/images/blog/season.webp" },
  { src: "/images/figma/bf6c5.webp" },
];

export const ways = {
  eyebrow: "What we support",
  heading: "How IPL gives back.",
  text: "Requests are reviewed by the IPL team. Here is what we can usually help with.",
  items: [
    { title: "Raffles and auctions", text: "Cage time, lessons and training packages for school, booster and nonprofit fundraisers.", image: "/images/hittrax/derby.webp", alt: "Young players gathered on the IPL turf during a camp" },
    { title: "Team and league sponsorships", text: "Support for local travel teams, school programs and leagues that keep kids playing.", image: "/images/figma/cc2e2.webp", alt: "A team practicing on the IPL indoor field" },
    { title: "Community events", text: "Help for events that bring young athletes and families together in Livingston County.", image: "/images/blog/parents.webp", alt: "Families watching from the IPL viewing area" },
  ],
};

export const partners = {
  eyebrow: "Our partners",
  heading: "In good company.",
  text: "The partners who train athletes under our roof and share our commitment to the community.",
};

export const mission = {
  eyebrow: "Why we give",
  heading: "Good baseball and softball communities are built locally.",
  text: "IPL was built so kids in Livingston County would not have to drive an hour for professional coaching. The schools, boosters, teams and nonprofits around us do the same work every day, and we want to back them. If your event helps young athletes or the families around them, we would like to hear about it.",
  points: [
    { title: "Who can request", text: "Schools, booster clubs, youth teams, leagues and registered nonprofits." },
    { title: "Timing", text: "Send requests at least four weeks before the date the donation is needed." },
  ],
  button: { label: "Request a donation", href: request },
  image: "/images/figma/78fac.webp",
  alt: "Brandon Inge coaching a youth team in an IPL cage",
};
