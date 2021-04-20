import { squareNumber } from "./squareNumber";

export function context(arrayOfNumbers: number[]): number[] {
  const Carre = arrayOfNumbers.map((nb) => {
    return squareNumber(nb);
  });
  return Carre;
}
