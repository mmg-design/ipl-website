/**
 * Video clips hosted on Bunny (storage zone "ingeperformance", pull zone IPLPullZone).
 * Portrait 1080x1920, 2 to 6 seconds, iPhone .mov. Every clip has a Den photo as its
 * poster, so a browser that cannot play the file still shows an image.
 */
const bunny = (folder: string, file: string) =>
  `https://iplpullzone.b-cdn.net/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
const den = (stamp: string) => bunny("Den Clips", `Video ${stamp}.mov`);
const photo = (name: string) => `/images/the-den/${name}.webp`;

export interface Clip { src: string; poster: string; label: string }

export const denClips = {
  plateRotation: { src: den("Oct 03 2026, 1 37 15 PM"), poster: photo("den-med-ball-throws"), label: "Plate rotations" },
  splitSquat: { src: den("Oct 03 2026, 1 37 40 PM"), poster: photo("den-band-lateral"), label: "Rotational strength" },
  boxJump: { src: den("Oct 05 2026, 7 05 22 PM"), poster: photo("den-sprint-start"), label: "Box jumps" },
  forcePlate: { src: den("Oct 07 2026, 7 10 41 PM"), poster: photo("den-force-plate"), label: "Force plate testing" },
  stepUp: { src: den("Oct 09 2026, 4 38 44 PM"), poster: photo("den-med-ball-group"), label: "Explosiveness" },
  trapBar: { src: den("Oct 13 2026, 5 01 32 PM"), poster: photo("den-trap-bar"), label: "Trap bar deadlifts" },
  hexBar: { src: den("Sep 09 2026, 7 09 36 PM"), poster: photo("den-hex-bar"), label: "Hex bar pulls" },
  sledPush: { src: den("Sep 09 2026, 7 33 47 PM"), poster: photo("den-med-ball-group"), label: "Sled push" },
  sprint: { src: den("Sep 11 2026, 5 24 42 PM"), poster: photo("den-sprint-start"), label: "Stability" },
} satisfies Record<string, Clip>;

/** Throwing on the turf. Not a Den clip: held for the Pitching page. */
export const throwingClip: Clip = { src: den("Sep 14 2026, 5 41 55 PM"), poster: photo("den-sprint-start"), label: "Throwing on the turf" };
