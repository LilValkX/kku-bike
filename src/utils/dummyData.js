export const dummyProfile = {
  // ตัวเลขจริง สำหรับคำนวณ + กราฟ
  distance: 120,   // km
  calories: 6200,  // kcal
  carbon: 24,      // kg
  points: 480,
  balance: 250,

  // ใช้โชว์ใน history ได้ ไม่ต้องเปลี่ยน
  history: [
    { id: 1, date: "2025-09-25", distance: 8, time: "28 min" },
    { id: 2, date: "2025-09-26", distance: 10, time: "35 min" },
    { id: 3, date: "2025-09-28", distance: 12, time: "40 min" },
    { id: 4, date: "2025-09-30", distance: 15, time: "50 min" },
    { id: 5, date: "2025-10-01", distance: 20, time: "70 min" },
  ],

  payments: [
    { id: 1, date: "2025-09-20", amount: 100 },
    { id: 2, date: "2025-09-25", amount: 50 },
    { id: 3, date: "2025-09-28", amount: 200 },
    { id: 4, date: "2025-09-30", amount: 150 },
    { id: 5, date: "2025-10-01", amount: 100 },
  ],
};
