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

  // getAll(): Promise<Game[]> {
  //   return this.collection
  //     .find()
  //     .toArray()                    // le monde des toons avant le .then()
  //     .then((games) => {            // permet de l'utiliser    (Then = resolve = return)
        // return games.map((game) => {
        //   return {
        //     name: game.name,
        //     slug: game.slug,
        //     cover: game.cover_url,
        //   };
        // });
      // });
  // }

  async getAll(): Promise<Game[]> {
    const games2 = await this.collection.find().toArray();
    const newgames = games2.map((game) => {
      return {
        name: game.name,
        slug: game.slug,
        cover: game.cover_url,
      };
    });
    return newgames;
  }

  // findBySlug(slug: string): Promise<Game | null> {
  //   return this.collection.findOne({ slug }).then((array) => {
  //     if (slug) {
  //       return array;
  //     }
  //   });
  // }

  async findBySlug(slug: string): Promise<Game | null> {
    const gameBySlug = await this.collection.findOne({ slug });
    const newGameBySlug = gameBySlug;
    if (gameBySlug) {
      return newGameBySlug;
    }
    return gameBySlug;
  }

  // findByPlatform(platform_slug: string): Promise<Game[]> {
  //   return this.collection
  //     .find()
  //     .toArray()
  //     .then((gameByPlateform) => {
  //       return gameByPlateform.filter((plateform) => {
  //         if (plateform.platform.slug === platform_slug) {
  //           return {
  //             name: plateform.name,
  //             slug: plateform.slug,
  //           };
  //         }
  //       });
  //     });
  // }

  async findByPlatform(platform_slug: string): Promise<Game[]> {
    const gameByPlateform = await this.collection.find().toArray();
    const newGameByPlateform = gameByPlateform.filter((plateform) => {
      if (plateform.platform.slug === platform_slug) {
        return {
          name: plateform.name,
          slug: plateform.slug,
        };
      }
    });
    return newGameByPlateform;
  }

  // getPlatforms(): Promise<Platform[]> {
  //   return this.collection
  //     .find()
  //     .toArray()
  //     .then((platformname) => {
  //       const result: Platform[] = [];
  //       platformname.forEach((game) => {
  //         if (
  //           result.find((platform) => {
  //             return game.platform.slug === platform.slug;
  //           }) === undefined
  //         ) {
  //           result.push({
  //             name: game.platform.name,
  //             slug: game.platform.slug,
  //           });
  //         }
  //       });
  //       return result;
  //     });
  // }

  async getPlatforms(): Promise<Platform[]> {
    const getPlatforms = await this.collection.find().toArray();
    const result: Platform[] = [];
    const newGetPlatforms = getPlatforms.forEach((game) => {
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
      return newGetPlatforms;
    });
    return result;
  }
}
