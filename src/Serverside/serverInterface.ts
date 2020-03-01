export interface Seat {
  seatId: number;
  problems: string[];
}

export const getSeats: () => Seat[] = () => {
  const mockSeats: Seat[] = [
    { seatId: 315, problems: [""] },
    { seatId: 317, problems: ["no outlet"] }
  ];
  return mockSeats;
};
