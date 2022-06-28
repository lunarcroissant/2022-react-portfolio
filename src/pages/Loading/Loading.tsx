import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LoadingAnimation from "./Constants";
import loadingAnimationSmoothed from "../../lotties/LogoAnimationWithSmoothing.json";
import loadingAnimationSmoothedV3 from "../../lotties/LogoAnimationWithSmoothingV3.json";
import loadingAnimationLinear from "../../lotties/LogoAnimationV1.json";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div
      className={`${styles["loading-wrapper"]} row align-center justify-center`}
    >
      <Player
        autoplay
        loop
        src={loadingAnimationSmoothedV3}
        style={{ height: "80px", width: "80px" }}
        speed={1}
      >
        {/* <Controls
          visible={true}
          buttons={["play", "repeat", "frame", "debug"]}
        /> */}
      </Player>
    </div>
  );
};

export default Loading;
