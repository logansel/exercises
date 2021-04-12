import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";

class AuthorRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<void> {
    return fetch (`${this.baseUrl}/authors`, {method : "GET"})
      .then((response) => response.json())
      .then ((json) => json)
      .catch ((error)) => console.error(error);
  }



}

// Leave the line below for tests to work
export {
  AuthorRepository
}
