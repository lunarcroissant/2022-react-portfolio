import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "./Constants";
import loadingAnimationSmoothed from "../../lotties/LogoAnimationWithSmoothingTest2.json";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div
      className={`${styles["loading-wrapper"]} row align-center justify-center`}
    >
      <Player
        autoplay
        loop
        src={loadingAnimationSmoothed}
        style={{ height: "80px", width: "80px" }}
        speed={1}
      ></Player>
    </div>
  );
};

export default Loading;
