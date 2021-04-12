import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  // platform = Game.platform
  return games.filter((game) => game.platform === platform);
}
