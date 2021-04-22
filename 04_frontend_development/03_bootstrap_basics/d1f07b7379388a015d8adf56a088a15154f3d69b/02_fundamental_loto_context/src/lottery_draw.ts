type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const array: Draw = [0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 6; i++) {
    array[i] = Math.floor(Math.random() * 100);
  }
  return array;
}
