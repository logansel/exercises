import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  const sentenceArray = sentence.split(" ");
  const sentenceUp = sentenceArray.map((element) => {
    return capitalize(element);
  });
  return sentenceUp.join(" ");
}
