import { useEffect, useState } from "react";
import "./App.css";

import "./global-js/WelcomePageBackgroundParticle.js";
import Work from "./pages/Work/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import GlobalContext from "./contexts/GlobalContext/GlobalContext";
import Contact from "./pages/Contact/Contact";
import { iPad } from "./constants/globalConstants";
import Loading from "./pages/Loading/Loading";

function App() {
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  let windowInnerWidth = 0;

  handleResize();

  console.log(loading);

  function handleResize() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const currentWindowInnerWidth = window.innerWidth;

    if (
      currentWindowInnerWidth === 0 ||
      currentWindowInnerWidth !== windowInnerWidth
    ) {
      let innerWindowHeight = window.innerHeight;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty(
        "--vh",
        `${innerWindowHeight}px`
      );
    }
  }

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    // setLoading(false);
  };

  // useEffect(() => {
  //   window.addEventListener("load", handleLoadingComplete);
  //   // setTimeout(() => {
  //   //   setLoading(false);
  //   // }, 3000);
  //   return () => {
  //     window.removeEventListener("load", handleLoadingComplete);
  //   };
  // }, []);

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
      {/* {loading ? (
        <Loading />
      ) : ( */}
      <GlobalContext.Provider
        value={{
          contactFormVisible,
          setContactFormVisible,
          mobileMenuVisible,
          setMobileMenuVisible,
          loading,
          setLoading,
        }}
      >
        <>
          {loading && <Loading />}
          <Contact />
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Work />} />
              <Route path="/profile" element={<Profile data={[]} />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </BrowserRouter>
        </>
      </GlobalContext.Provider>
      {/* )} */}
      {/* <Work /> */}
    </>
  );
}

export default App;
