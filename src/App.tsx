import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "./global-js/WelcomePageBackgroundParticle.js";
import Work from "./pages/Work/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import GlobalContext from "./contexts/GlobalContext/GlobalContext";
import Contact from "./pages/Contact/Contact";
import { iPad } from "./constants/globalConstants";

function App() {
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  let windowInnerWidth = 0;

  handleResize();

  function handleResize() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const currentWindowInnerWidth = window.innerWidth;

    if (
      currentWindowInnerWidth === 0 ||
      currentWindowInnerWidth !== windowInnerWidth
    ) {
      let innerWindowHeight = window.innerHeight * 0.01;
      console.log(innerWindowHeight);
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty(
        "--vh",
        `${innerWindowHeight}px`
      );
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (iPad) {
      window.addEventListener("resize", handleResize);
      return () => {
        if (iPad) {
          window.removeEventListener("resize", handleResize);
        }
      };
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <>
      <GlobalContext.Provider
        value={{
          contactFormVisible,
          setContactFormVisible,
          mobileMenuVisible,
          setMobileMenuVisible,
        }}
      >
        <Contact />
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Work />} />
            <Route path="/profile" element={<Profile data={[]} />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
      {/* <Work /> */}
    </>
  );
}

export default App;
