/**
 * Swift booking links (book.runswiftapp.com). One link per Swift service, so every
 * page books the exact service it prices. Copied from Swift admin > Services >
 * Rentals > "Copy booking link". If a service is recreated in Swift, its rentalId
 * changes: update it here and every page follows.
 */
const facility = "https://book.runswiftapp.com/facilities/ingeperformancelab";
const rental = (id: number) => `${facility}/rentals?rentalId=${id}`;
const membership = (id: number) => `${facility}/memberships?membershipId=${id}`;
const lesson = (id: number) => `${facility}/lessons?lessonId=${id}`;

export const swift = {
  home: facility,
  rentals: {
    cage1: rental(6920), // Cage Rental
    cage2: rental(7186), // 2 Cage Rental
    cage3: rental(7187), // 3 Cage Rental
    field: rental(7182), // Field Rental
    fieldCombo1h: rental(7203), // Field and Cage Combo (1 hour)
    fieldCombo90m: rental(7191), // Field and Cage Combo (1.5 Hours)
    fieldCombo2h: rental(7204), // Field and Cage Combo (2 hours)
  },
  /* Public memberships only. "Inge Elite Blue" and "Inge Elite Performance
     Training" are set to Private in Swift and stay off the site. */
  memberships: {
    bronze: membership(7874), // Bronze Cage Membership, $99/mo
    silver: membership(7873), // Silver Cage Membership, $149/mo
    gold: membership(7872), // Gold Cage Membership, $199/mo
    unlimited: membership(7871), // Unlimited Cage Membership, $299/mo
    platinumFoundations: membership(8714), // Platinum Foundations, $500/mo (13 and under)
    platinumPerformance: membership(8713), // Platinum Performance, $700/mo (14 and up)
    denFoundations: membership(7875), // The Den Foundations Training, $199/mo
    denPerformance: membership(7503), // The Den Performance Training, $400/mo
    denPerformanceLite: membership(8453), // The Den Performance Training Lite, $320/mo
    ingeEliteOrange: membership(8655), // Inge Elite Orange, $730/mo
  },
  /* HP Throwing Program (Kyle Fedorka), November start. For the Pitching page. */
  throwing: {
    hsWithLifting: membership(8498), // HS Throwing w/ 2SP Lifting, $650/mo
    hsMonFriWithLifting: membership(8604), // HS Throwing Mon/Fri w/ 2SP Lifting, $500/mo
    hsThrowingOnly: membership(8500), // HS Throwing ONLY, $450/mo
    futuresWithLifting: membership(8499), // Futures Throwing w/ 2SP Lifting, $500/mo
    futuresThrowingOnly: membership(8501), // Futures Throwing ONLY, $300/mo
  },
  /* Lessons: 60-minute link first, 30-minute second. Some coaches take a deposit at booking and the rest at the lesson. */
  lessons: {
    brandon60: lesson(6676), brandon30: lesson(7070), // $200 / $100
    brandonProDefense: lesson(7110), brandonProOffense: lesson(7111), // Pro Practice, 8 to 12 players, $150
    rob60: lesson(7061), rob30: lesson(7062), // $140 / $75
    owen60: lesson(7065), owen30: lesson(7066), // $125 / $75, baseball catching or hitting
    doug60: lesson(7254), doug30: lesson(7252), // $120 / $65, hitting
    hp60: lesson(7022), hp30: lesson(7021), // High Performance Training pitching, $130 / $65
    jordan60: lesson(7027), jordan30: lesson(7060), // softball hitting, $85 / $60
    megan60: lesson(7028), megan30: lesson(7029), // softball hitting, $110 / $65
    taylor60: lesson(6837), taylor30: lesson(6838), // softball catching, $130 / $65
  },
} as const;
