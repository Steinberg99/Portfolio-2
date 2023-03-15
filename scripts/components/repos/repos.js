import { repo } from "./components/repo/repo.js";

const repos = (repos) => {
  const repoElements = repos.map((obj) => repo(obj)).join(" ");

  const markup = `
    <nav>
      <ul>
        ${repoElements}
      </ul>
    </nav>
  `;

  return markup;
};

export { repos };
