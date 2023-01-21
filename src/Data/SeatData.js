const SEATS = {
    SEAT_TYPE: [
      { type: "BALCONY", title: "Balcony" },
      { type: "CHAIRTYPE", title: "Chairs" },
      { type: "BENCH", title: "Bench" }
    ],
    SEAT_PRICE: { BALCONY: 500, CHAIRTYPE: 300, BENCH: 200 },
    MAX_SEAT_ALLOWED: 5,
    SEAT_STRUCTURE: {
        BALCONY: [
        {
          row: "J",
          seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          totalPlaces: 10
        }
      ],
      CHAIRTYPE: [
        {
          row: "I",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        },
        {
          row: "H",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        },
        {
          row: "G",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        }
      ],
      BENCH: [
        {
          row: "D",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        },
        {
          row: "F",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        },
        {
          row: "E",
          seats: [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          totalPlaces: 15
        },      
      ]
    }
  };
  export default SEATS;
  