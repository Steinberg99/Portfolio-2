import { userPage } from "../pages/user.js";
import { Routie } from "../packages/routie.js";

if (window.location.hash === "") {
  window.location.hash = "#user/Steinberg99";
}

const router = () => {
  routie({
    "user/:username": (username) => {
      console.log(username);

      userPage(username);
    },
  });
};

export { router };
