export const zone = ["HC2", "HC3", "HC4", "RIVERBANK"];

export const parkingSpot = [
  {
    id: 1,
    title: "HC2 street 1",
    description: "HC2 first street ",
    zone: "HC2",
    spots: [
      { id: 1, empty: false, timeLeft: 15 },
      { id: 2, empty: false, timeLeft: 10 }
    ]
  },
  {
    id: 2,
    title: "HC2 street 2",
    description: "HC2 second street",
    zone: "HC2",
    spots: [
      { id: 3, empty: false, timeLeft: 15 },
      { id: 4, empty: true, timeLeft: 0 }
    ]
  },
  {
    id: 3,
    title: "HC3 Street 1",
    description: "HC3 frist street",
    zone: "HC3",
    spots: [
      { id: 5, empty: false, timeLeft: 13 },
      { id: 6, empty: true, timeLeft: 0 }
    ]
  },
  {
    id: 4,
    title: "HC3 Street 2",
    description: "HC3 second street",
    zone: "HC3",
    spots: [
      { id: 7, empty: false, timeLeft: 5 },
      { id: 8, empty: true, timeLeft: 14 }
    ]
  },
  {
    id: 5,
    title: "HC4 street 1",
    description: "HC4 first street",
    zone: "HC4",
    spots: [
      { id: 9, empty: false, timeLeft: 115 },
      { id: 10, empty: true, timeLeft: 15 }
    ]
  },
  {
    id: 6,
    title: "HC4 street 2",
    description: "HC 4 second street",
    zone: "HC4",
    spots: [
      { id: 11, empty: false, timeLeft: 150 },
      { id: 12, empty: true, timeLeft: 0 }
    ]
  },
  {
    id: 7,
    title: "River Bank 1",
    description: "River Bank parking lot",
    zone: "RIVERBANK",
    spots: [
      { id: 13, empty: true, timeLeft: 0 },
      { id: 14, empty: true, timeLeft: 0 },
      { id: 15, empty: false, timeLeft: 1440 }
    ]
  }
];
