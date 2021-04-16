import { Collection } from "mongodb";

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
  collection: Collection;

  constructor(collection: Collection) {
    this.collection = collection;
  }

  getAll(): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((games) => {
        return games.map((game) => {
          return {
            name: game.name,
            slug: game.slug,
            cover: game.cover_url,
          };
        });
      });
  }

  findBySlug(slug: string): Promise<Game | null> {
    return this.collection.findOne({ slug }).then((array) => {
      if (slug) {
        return array;
      }
    });
  }

  findByPlatform(platform_slug: string): Promise<Game[]> {
    return this.collection
      .find()
      .toArray()
      .then((gameByPlateform) => {
        return gameByPlateform.filter((plateform) => {
          if (plateform.platform.slug === platform_slug) {
            return {
              name: plateform.name,
              slug: plateform.slug,
            };
          }
        });
      });
  }

  getPlatforms(): Promise<Platform[]> {
    return this.collection
      .find()
      .toArray()
      .then((platformname) => {
        const result: Platform[] = [];
        platformname.forEach((game) => {
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
        return result;
      });
  }
}
