export const TimeTable = {
  periods: [
    "09:30AM to 10:20AM",
    "10:20AM to 11:10AM",
    "11:10AM to 12:00PM",
    "12:00PM to 12:50PM"
  ],
  timetable: {
    Monday: [
      { subject: "MEMS", cancelled: false },
      { subject: "HRM", cancelled: false },
      { subject: "DDB", cancelled: false },
      { subject: "SOA", cancelled: false }
    ],
    Tuesday: [
      { subject: "HRM", cancelled: false },
      { subject: "MEMS", cancelled: false },
      { subject: "DDB", cancelled: false },
      { subject: "SOA", cancelled: false }
    ],
    Wednesday: [
      { subject: "DDB", cancelled: false },
      { subject: "SOA", cancelled: false },
      { subject: "MEMS", cancelled: false },
      { subject: "DDB", cancelled: false }
    ],
    Thursday: [
      { subject: "SOA", cancelled: false },
      { subject: "DDB", cancelled: false },
      { subject: "HRM", cancelled: false },
      { subject: "MEMS", cancelled: false }
    ],
    Friday: [
      { subject: "DDB", cancelled: false },
      { subject: "MEMS", cancelled: false },
      { subject: "SOA", cancelled: false },
      { subject: "HRM", cancelled: false }
    ],
    Saturday: [
      { subject: "SOA", cancelled: false },
      { subject: "HRM", cancelled: true },
      { subject: "DDB", cancelled: false },
      { subject: "MEMS", cancelled: true }
    ]
  }
};
