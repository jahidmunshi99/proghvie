const INITIAL_DATA = [
  {
    id: "rec-001",
    f_year: "2025-26",
    crop_session: "robi",
    upazilaId: "Savar",
    crop_name: "Wheat",
    category: "seedbed",
    target: 1500,
    varieties: [
      { name: "BARI Gom-25", achievement: 640 },
      { name: "BARI Gom-28", achievement: 380 },
      { name: "Local variety", achievement: 200 },
    ],
    achievement_total: 1220,
  },
  {
    id: "rec-002",
    f_year: "2025-26",
    crop_session: "robi",
    upazilaId: "Dhamrai",
    crop_name: "Mustard",
    category: "field",
    target: 900,
    varieties: [
      { name: "BARI Sarisha-14", achievement: 500 },
      { name: "BARI Sarisha-15", achievement: 320 },
    ],
    achievement_total: 820,
  },
  {
    id: "rec-003",
    f_year: "2024-25",
    crop_session: "kharif",
    upazilaId: "Keraniganj",
    crop_name: "Paddy",
    category: "seedbed",
    target: 3200,
    varieties: [
      { name: "BRRI dhan28", achievement: 1500 },
      { name: "BRRI dhan29", achievement: 900 },
    ],
    achievement_total: 2400,
  },
  {
    id: "rec-004",
    f_year: "2025-26",
    crop_session: "kharif",
    upazilaId: "Nawabganj",
    crop_name: "Jute",
    category: "field",
    target: 680,
    varieties: [],
    achievement_total: 0,
  },
];

export default INITIAL_DATA;