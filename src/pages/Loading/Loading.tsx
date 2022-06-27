import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "../../lotties/LogoAnimationV1.json";

import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div
      className={`${styles["loading-wrapper"]} row align-center justify-center`}
    >
      <Player
        autoplay
        loop
        src={loadingAnimation}
        style={{ height: "10vh", width: "10vw" }}
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
