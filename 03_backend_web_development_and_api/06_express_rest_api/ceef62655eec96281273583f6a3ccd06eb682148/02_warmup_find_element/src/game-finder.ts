export function findGameFromSlug(games: Game[], slug: string): Game {
  return games.find((element) => element.slug === slug);
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
  platform: string;
};

// return games.find((element) => (element.slug === slug)? element.slug : undefined)
