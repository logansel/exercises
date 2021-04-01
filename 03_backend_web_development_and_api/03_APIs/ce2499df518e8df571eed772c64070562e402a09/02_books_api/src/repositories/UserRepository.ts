import fetch, { Response } from "node-fetch";
import { Comment } from "../@types/comment";
import { User } from "../@types/user";


// => User Repository
// ✕ Must have all required functions (4 ms)
// #create
//   ✕ Must use 'node-fetch' package with the right params (1 ms)
//   ✕ Returns the created `user` (1 ms)
// #update
//   ✕ Must use 'node-fetch' package with the right params (1 ms)
//   ✕ Returns the updated `user` (1 ms)
// #delete
//   ✕ Must use 'node-fetch' package with the right params (1 ms)
//   ✕ Returns the deleted `user`

class UserRepository {
  baseUrl = process.env.BASE_URL

  getAll(): Promise<void> {
    return fetch(`${this.baseUrl}/users`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getOne(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/users/${id}`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  getUserComments(id:number): Promise<void> {
    return fetch(`${this.baseUrl}/users/${id}/comments`,{ method: "GET"})
      .then((response) => response.json())
      .then((json) => json)
      .catch((error) => console.error(error));
  }

  
  create(params: Record<string, unknown>): Promise<void> {
    return fetch(`${this.baseUrl}/users`, {method: "POST",
      body:    JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
  })
      .then(res => res.json())
      .then(json => json);
}

  update(id: number, params:Record<string, unknown>): Promise<void> {
    return fetch(`${this.baseUrl}/users/${id}`, {method: "PATCH",
      body:    JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(json => json);
  }



  delete(id: number): Promise<void> {
    return fetch(`${this.baseUrl}/users/${id}`, {method: "DELETE"})
    .then(res => res.json())
    .then(json => json);
  }

      // return fetch(`${this.baseUrl}/users/`, { method: 'POST', body: 'a=1' })
      //   .then(response => response.json()) 
      //   .then(json => json)
      //   .catch((error) => console.error(error));
    
}

// Leave the line below for tests to work
export {
  UserRepository
}
