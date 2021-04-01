import fetch from "node-fetch";
import { Author } from "../@types/author";
import { Book } from "../@types/book";


// #searchByName
//   ✕ Must use 'node-fetch' package with the right url and method (5 ms)
//   ✕ Returns an `authors` array (8 ms)

class AuthorRepository {
  baseUrl = process.env.BASE_URL

  // Code functions here like this
  
  getAll(): Promise<void> {
    return fetch(`${this.baseUrl}/authors`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getOne(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/authors/${id}`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getAuthorBooks(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/authors/${id}/books`,{ method: 'GET'})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  searchByName(term:string): Promise<void> {
    return fetch(`${this.baseUrl}/authors?q=${term}`,{ method: 'GET'})
    .then((response) => response.json())
    .then((json) => json )
    .catch((error) => console.error(error));
  }
}

// Leave the line below for tests to work
export {
  AuthorRepository
}
