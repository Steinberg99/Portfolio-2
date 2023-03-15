import { userPage } from "../pages/user.js";
import { Routie } from "../packages/routie.js";

const router = () => {
  routie({
    "user/:username": (username) => {
      console.log(username);

      userPage(username);
    },
  });
};

export { router };
