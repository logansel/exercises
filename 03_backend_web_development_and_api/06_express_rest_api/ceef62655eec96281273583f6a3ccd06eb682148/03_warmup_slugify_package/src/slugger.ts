import slugify from "slugify";

export function slugger(sentence: string): string {
  return slugify(sentence);
}

export function sluggerWithUnderscores(sentence: string): string {
  return slugify(sentence, "_");
}
