// Paste the content of your GithubClient file here
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
    return getReposUrlByNickname(nickname);
  }

  static getRepos(url: string): Promise<Repo[]> {
    return listRepos(url);
  }

  // printRepos
  // Must take an array pf repositories as an argument.
  // Must return the array of repositories.

  // Must use 'console.log' to print the list of repositories in the following format:
  // 1 - nameOfFirstFolder
  // 2 - nameOfSecondFodler
  // ...

  static printRepos(print: Repo[]): Repo[] {
    print.forEach((element, index) => console.log(`${index + 1} - ${element.name}`));
    return print;
  }

  static printRepository(newRepo: Repo): void {
    console.log(`Repository: ${newRepo.name}`);
    console.log(`Description: ${newRepo.description}`);
    console.log(`Subscribers count: ${newRepo.subscribers_count}`);
    console.log(`Stars count: ${newRepo.stargazers_count}`);
    console.log(`Language: ${newRepo.language}`);
    console.log(`Url: ${newRepo.url}`);
  }

  static getProjectInformations(url: string): Promise<Repo> {
    return getOneRepoInfos(url);
  }
}
