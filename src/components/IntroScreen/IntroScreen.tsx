import { useEffect } from "react";
import Button, { ButtonType } from "../base/button/Button";
import "./IntroScreen.css";

const IntroScreen = () => {
  const numberOfMessages =
    document.getElementsByClassName("intro-message").length;

  console.log(numberOfMessages);

  useEffect(() => {
    for (let i = 0; i < numberOfMessages; i++) {
      const message = document.getElementsByClassName("intro-message")[i];

      message.classList.add("active");

      setTimeout(() => {
        // const message = document.getElementsByClassName("intro-message")[i];
        // const NewMessage =
        //   document.getElementsByClassName("intro-message")[i + 1];
        message.classList.remove("active");
        // NewMessage.classList.add("active");
        message.classList.add("spoken");
      }, 3000);
    }
    return () => {};
  });

  // for (let i = 0; i < numberOfMessages; i++) {
  //   setTimeout(() => {
  //     const message = document.getElementsByClassName("intro-message")[i];
  //     const NewMessage =
  //       document.getElementsByClassName("intro-message")[i + 1];

  //     message.classList.remove("active");
  //     message.classList.add("spoken");

  //     NewMessage.classList.add("active");
  //   }, 300);
  // }
  return (
    <div className="intro-screen">
      <div className="intro-chat">
        <span className="intro-message one">Hey!</span>
        <span className="intro-message two">
          I’m an aspiring London-based UI/UX Designer and Front-end Developer
          rolled into one
        </span>
        <span className="intro-message three">
          I work across design and development to ensure that beautiful and
          functional concepts translate into reality. Right now, I’m part of the
          software engineering team working on better experiences at EE.
        </span>
        <span className="intro-message four">
          Feel free to have a look around and get in touch anytime!
        </span>
      </div>

      <Button buttonVariant={ButtonType.primary} text="Skip Intro" />
    </div>
  );
};

export default IntroScreen;
