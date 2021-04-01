/* global db */

// write your MongoDB shell command here
const newCountry = [
  {
    name: "Espagne",
    capital: "Madrid",
    continent: "Europe",
  },
  {
    name: "Pologne",
    capital: "Varsovie",
    continent: "Europe",
  },
  {
    name: "Portugal",
    capital: "Lisbonne",
    continent: "Europe",
  }
];

db.worldAtlas.insertMany(newCountry)