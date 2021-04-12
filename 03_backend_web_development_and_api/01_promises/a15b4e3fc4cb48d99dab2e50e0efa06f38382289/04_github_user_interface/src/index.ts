import { ask, closeRl, rl } from "../interface";
import { GithubClient, Repo } from "./github-client";

ask("Github nickname\n> ")
  .then((nickname) => GithubClient.getReposUrl(nickname))
  .then((urlNickname) => GithubClient.getRepos(urlNickname))
  .then((repoUrlNickname) => GithubClient.printRepos(repoUrlNickname))
  .then((result) => {
    ask("Choose a repo number\n")
      .then((choiseRepo) => GithubClient.getProjectInformations(result[parseInt(choiseRepo) - 1].url))
      .then((urlRepo) => GithubClient.printRepository(urlRepo))
      .then(() => closeRl());
  });
