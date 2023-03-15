import { follower } from "./components/follower/follower.js";

const followers = (followers) => {
  const followerElements = followers.map((obj) => follower(obj)).join(" ");

  const markup = `
    <nav>
      <ul>
        ${followerElements}
      </ul>
    </nav>
  `;

  return markup;
};

export { followers };
