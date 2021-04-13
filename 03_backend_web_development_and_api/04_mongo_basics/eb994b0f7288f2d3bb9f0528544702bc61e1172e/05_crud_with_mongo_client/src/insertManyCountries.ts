import * as mongo from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

const insertNewCountry: Country[] = [
  {
    name: "Pologne",
    capital: "Varsovie",
    continent: "Europe",
  },
  {
    name: "Italie",
    capital: "Rome",
    continent: "Europe",
  },
];

export function insertManyCountries(db: mongo.Db): Promise<Country[]> {
  return db
    .collection("worldAtlas")
    .insertMany(insertNewCountry)
    .then((fefe) => {
      return fefe;
    });
}
