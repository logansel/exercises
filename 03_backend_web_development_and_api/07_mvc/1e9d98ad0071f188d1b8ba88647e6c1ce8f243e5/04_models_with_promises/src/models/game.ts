export type Game = {
  name: string;
  slug: string;
  [key: string]: any;
};

export type Platform = {
  name: string;
  slug: string;
  [key: string]: any;
};

export class GameModel {
  collection: Game[];

  constructor(collection: Game[]) {
    this.collection = collection;
  }

  //  getAll
  //     ✓ Should get all the games in a Promise
  //     ✓ All games should have name, slug and cover (1 ms)

  getAll(): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        }),
      );
    });
  }

  // findBySlug
  // ✕ Should find a game by its slug and return a Promise of it (1 ms)
  // ✕ Should return null when the game does not exist (but in a Promise)

  findBySlug(slug: string): Promise<Game | null> {
    return new Promise((resolve) => {
      const gameSlug = this.collection.find((game) => {
        if (game.slug === slug) {
          return game;
        }
      });
      if (gameSlug) {
        resolve(gameSlug);
      } else {
        resolve(null);
      }
    });
  }

  // findByPlatform
  // ✕ Should find games by its platform and return a Promise with them (1 ms)
  // ✕ Should return an empty array inside a Promise when the platform does not exist

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return new Promise((resolve) => {
      resolve(
        this.collection.filter((plateform) => {
          if (plateform.platform.slug === platform_slug) {
            return {
              name: plateform.name,
              slug: plateform.slug,
            };
          }
        }),
      );
    });
  }
  // getPlatforms
  // ✕ Should retun platforms in a Promise (1 ms)
  // ✕ All platforms should have name and slug

  getPlatforms(): Promise<Platform[]> {
    return new Promise((resolve) => {
      const result: Platform[] = [];

      this.collection.forEach((game) => {
        if (
          result.find((platform) => {
            return game.platform.slug === platform.slug;
          }) === undefined
        ) {
          result.push({
            name: game.platform.name,
            slug: game.platform.slug,
          });
        }
      });
      resolve(result);
    });
  }
}
