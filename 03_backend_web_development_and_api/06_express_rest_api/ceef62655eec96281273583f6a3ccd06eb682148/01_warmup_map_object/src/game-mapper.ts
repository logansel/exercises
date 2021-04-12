export function gameMapper(games: GameWithALotOfData[]): Game[] {
  return games.map((obj) => {
    const newArray = {
      name: obj.name,
      slug: obj.slug,
      cover: obj.cover.url,
    };
    return newArray;
  });
}

export type Game = {
  name: string;
  slug: string;
  cover: string;
};

export type GameWithALotOfData = {
  name: string;
  slug: string;
  code: number;
  cover: {
    thumbnail: string;
    url: string;
  };
};
