import express, { Request, Response } from "express";

export const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("OK");
  response.status(200).end(); // `status(200)` and `end()` are implied by the `json()` function
});
