const repo = (repo) => {
  const markup = `
    <li>
      <a href=${repo.url}>
        <h2>${repo.name}</h2>

        ${repo.description !== "" ? `<p>${repo.description}</p>` : ""}

        <ul>
          ${repo.topics.map((topic) => `<li><p>${topic}</p></li>`).join(" ")}
        </ul>
      </a>
    </li>
  `;

  return markup;
};

export { repo };
