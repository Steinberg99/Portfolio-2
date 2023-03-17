const follower = (follower) => {
  const markup = `
    <li>
      <a href="#user/${follower.username}">
        <img src=${follower.avatar}/>

        <h3>${follower.username}</h3>
      </a>
    </li>
  `;

  return markup;
};

export { follower };
