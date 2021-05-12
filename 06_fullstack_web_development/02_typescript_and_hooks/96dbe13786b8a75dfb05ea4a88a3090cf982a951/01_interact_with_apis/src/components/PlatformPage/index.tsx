import React from "react";
import { Platform, Game } from "../../types/Platform";

export const PlatformPage: React.FC = (): JSX.Element => {
  const [onePlatform, setOnePlatform] = React.useState<Platform[]>([]);

  React.useEffect(() => {
    fetch("https:videogames-sparta.herokuapp.com/platforms", { headers: { accept: "application/json" } })
      .then((response) => response.json())
      .then((platforms) => {
        setOnePlatform(platforms);
      });
  }, []);

  return (
    <div>
      <select>
        {onePlatform.map((platform, _id) => {
          // console.log(onePlatform);
          return <option key={_id}> {platform.name}</option>;
        })}
      </select>
    </div>
  );
};

export const GamesPage: React.FC = (): JSX.Element => {
  const [oneGame, setOneGame] = React.useState<Game[]>([]);

  React.useEffect(() => {
    fetch("https:videogames-sparta.herokuapp.com/games", { headers: { accept: "application/json" } })
      .then((response) => response.json())
      .then((games) => {
        setOneGame(games);
      });
  }, []);

  return (
    <div>
      <ul className="list-group">
        {oneGame.map((game, _id) => {
          console.log(oneGame);
          return (
            <li className="list-group-item list-group-item-info" key={_id}>
              {game.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
