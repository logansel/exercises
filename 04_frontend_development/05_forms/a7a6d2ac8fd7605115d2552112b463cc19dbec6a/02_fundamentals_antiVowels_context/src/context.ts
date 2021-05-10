import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  const split = sentenceSplitter(sentence).filter((tri) => {
    if (
      tri.substr(0, 1).toUpperCase() !== "A" &&
      tri.substr(0, 1).toUpperCase() !== "E" &&
      tri.substr(0, 1).toUpperCase() !== "I" &&
      tri.substr(0, 1).toUpperCase() !== "O" &&
      tri.substr(0, 1).toUpperCase() !== "U" &&
      tri.substr(0, 1).toUpperCase() !== "Y"
    ) {
      return true;
    }
  });
  return sentenceJoiner(split);
};
