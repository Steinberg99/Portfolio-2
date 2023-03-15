const follower = (follower) => {
  const markup = `
    <li>
      <a href="#user/${follower.username}">
        <img src=${follower.avatar}/>

        <p>${follower.username}</p>
      </a>
    </li>
  `;

  return markup;
};

export { follower };
