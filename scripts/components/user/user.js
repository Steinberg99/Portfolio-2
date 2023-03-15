const user = (user) => {
  console.log(user);

  const markup = `
    <div>
      <img src=${user.avatar}/>

      <p>${user.username}</p>

      ${user.bio !== "" ? `<p>${user.bio}</p>` : ""}

      <a href="${user.gitHubUrl}">GitHub url</a>
    <div>
  `;

  return markup;
};

export { user };
