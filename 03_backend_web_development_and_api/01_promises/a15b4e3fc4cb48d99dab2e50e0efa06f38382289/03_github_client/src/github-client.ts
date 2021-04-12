import { getReposUrlByNickname, listRepos, getOneRepoInfos } from "../utils";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return getReposUrlByNickname(nickname).then((url) => {
      if (url.message === "Not Found") {
        throw new Error("User doesn't exist");
      } else {
        return url.repos_url;
      }
    });
  }
 

//   getRepos
// Must take a url string parameter.
// Must use the listRepos function that takes an url as its argument.
// Must return an array of repositories.

  static getRepos(url: string): Promise<Repo[]>{
    return listRepos(url)
  }
  

  // printRepos
  // Must take an array pf repositories as an argument.
  // Must return the array of repositories.

  // Must use 'console.log' to print the list of repositories in the following format:
  // 1 - nameOfFirstFolder
  // 2 - nameOfSecondFodler
  // ...

  static printRepos(print: Repo[]): Repo[]{
    print.forEach((element, index) => console.log(`${index+1} - ${element.name}`));
    return print

  }

  

    // Must use console.log to print the following repository's information:

  static printRepository(newRepo: Repo): void {
      console.log(`${newRepo.name}`);
      console.log(`${newRepo.description}`);
      console.log(`${newRepo.subscribers_count}`);
      console.log(`${newRepo.stargazers_count}`);
      console.log(`${newRepo.language}`);
      console.log(`${newRepo.url}`);
  }




  static getProjectInformations(url: string): Promise<Repo> {
    return getOneRepoInfos(url);
  }
}
