import { followers } from "../components/followers/followers.js";
import { repos } from "../components/repos/repos.js";
import { user } from "../components/user/user.js";
import { getUserData } from "../utils/getUserData.js";

const app = document.querySelector(".app");

const userPage = async (username) => {
  const userData = await getUserData(username);

  console.log(userData);

  const markup = `
    ${user(userData.user)}
  `;

  app.innerHTML = markup;
};

export { userPage };
