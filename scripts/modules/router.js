import { Routie } from "./packages/routie.js";
import { getData } from "./getData.js";

const router = () => {
  routie({
    "user/:userId": (userId) => {
      getData(userId);
    },
  });
};

export { router };
