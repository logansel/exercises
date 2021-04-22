import { lottery_draw } from "./lottery_draw";

type Draw = number[];

export function contextFunction(ticket: Draw): void {
  const tab = lottery_draw();

  for (let i = 0; i < 6; i++) {
    if (tab[i] === ticket[i]) {
      console.log("You won the lottery!");
    } else {
      console.log("You lost...");
    }
  }
}
