import { getChuckCategories, getChuckJoke } from "../utils";

function getCategories(): Promise<string[]> {
  return getChuckCategories();
}

function getJoke(categories: string): Promise<string> {
  return getChuckJoke(categories).then(joke => joke.value);
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
