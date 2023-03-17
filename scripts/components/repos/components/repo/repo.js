const repo = (repo) => {
  let topics = "";
  if (repo.topics.length >= 1) {
    topics = `
    <h4>Topics</h4>

    <ul>
      ${repo.topics.map((topic) => `<li><p>${topic}</p></li>`).join(" ")}
    </ul>`;
  }

  const markup = `
    <li>
      <a href=${repo.url}>
        <h3>${repo.name}</h3>

        ${repo.description !== "" ? `<p>${repo.description}</p>` : ""}

        ${topics}

        <p>Main language: ${repo.language}</p>
      </a>
    </li>
  `;

  return markup;
};

export { repo };
