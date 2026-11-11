/**
 * Plain-language explanations for pricing checklist items. PricingTiers shows an info
 * tooltip next to any item listed here (matched case-insensitively). Add entries as needed.
 */
export const glossary: Record<string, string> = {
  "hittrax included": "HitTrax tracks exit velocity, launch angle, distance and spray chart on every swing, with video. No extra charge.",
  "hittrax in every cage": "Every cage has HitTrax, so every swing logs exit velocity, launch angle and distance with video.",
  "hittrax on every swing": "Each swing is measured and saved to the athlete's profile, so progress shows up week over week.",
  "hittrax every session": "Every session is tracked on HitTrax, so you can see what changed from the last one.",
  "hittrax in softball mode": "HitTrax set up for fastpitch distances and pitch speeds.",
  "jr. hack attack included": "A three-wheel pitching machine that throws fastballs, breaking balls and fastpitch at game-like speeds.",
  "machines included": "Pitching machines set for baseball or fastpitch come with the cage.",
  "unlimited cage sessions": "Book cage time as often as you like during open hours, up to one hour per day.",
  "up to one hour per day": "One cage booking per day, up to 60 minutes.",
  "up to 1 hour a day": "One cage booking per day, up to 60 minutes.",
  "cage time every day": "Book a cage once per day during open hours.",
  "up to 2 den sessions a week": "Two coached strength and speed sessions per week in The Den, run on 2SP programming.",
  "up to 3 den sessions a week": "Three coached strength and speed sessions per week in The Den, run on 2SP programming.",
  "performance training programming": "Strength, speed and arm care programming from 2SP Sports Performance, built for baseball and softball.",
  "custom 2sp program": "A training plan written by a 2SP coach for your athlete's age, position and goals.",
  "2sp coach on the floor": "A 2SP coach runs every session and coaches each lift and drill.",
  "coach on the floor": "A coach runs the session and corrects form in real time.",
  "age-appropriate programming": "Training loads and exercises matched to the athlete's age and training history.",
  "full turf infield": "A varsity-size indoor turf infield, big enough for full defensive practice.",
  "cages included": "Batting cages are reserved for your group along with the infield.",
  "15% off 12+ week blocks": "Organizations that book the same weekly slot for 12 weeks or more save 15%.",
  "10% off camps and clinics": "Members save 10% on IPL camps and clinics.",
  "15% off camps and clinics": "Members save 15% on IPL camps and clinics.",
  "video every session": "Sessions are recorded so athletes and parents can review mechanics afterward.",
  "video and written takeaways": "You leave with video and a short written summary of what to work on.",
  "small group options": "Train with one to three other athletes at a lower per-athlete rate.",
  "stack two for 60 minutes": "Book two 30-minute slots back to back for a full hour.",
  "30 or 60 minute lessons": "Choose a 30 or 60 minute private lesson when you book.",
  "$50 facility fee booked online": "The $50 facility fee is paid when you book in Swift. The rest goes to the trainer at the lesson.",
  "$100 to trainer at lesson": "Paid directly to the trainer at the start of the lesson.",
};

export const tipFor = (label: string) => glossary[label.trim().toLowerCase()];
