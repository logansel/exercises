import * as mongo from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

const newCountry: Country = {
  name: "Espagne",
  capital: "Madrid",
  continent: "Europe",
};

export function insertOneCountry(db: mongo.Db): Promise<Country> {
  return db
    .collection("worldAtlas")
    .insertOne(newCountry)
    .then((doc) => {
      return doc.ops[0];
    });
}
