import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/stylesystem.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import WelcomePageBackground from "./components/WelcomePageBackground/WelcomePageBackground";
import IntroScreen from "./components/IntroScreen/IntroScreen";
import Work from "./pages/Work/Work";

ReactDOM.render(
  <React.StrictMode>
    {/* <script
      type="module"
      src="./global-js/WelcomePageBackgroundParticle.js"
    ></script>
    <script type="module" src="./global-js/main.js"></script> */}
    {/* <Work /> */}
    <App />
    {/* <IntroScreen /> */}
    {/* <WelcomePageBackground /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
