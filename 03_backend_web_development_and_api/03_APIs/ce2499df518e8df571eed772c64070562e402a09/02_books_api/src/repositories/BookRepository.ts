import fetch from "node-fetch";
import { Book } from "../@types/book";
import { Comment } from "../@types/comment";


class BookRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<void> {
    return fetch(`${this.baseUrl}/books`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getOne(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/books/${id}`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getBookComments(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/books/${id}/comments`,{ method: 'GET'})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  searchByTitle(term:string): Promise<void> {
    return fetch(`${this.baseUrl}/books?q=${term}`,{ method: 'GET'})
    .then((response) => response.json())
    .then((json) => json )
    .catch((error) => console.error(error));
  }
}

// Leave the line below for tests to work
export {
  BookRepository
}
