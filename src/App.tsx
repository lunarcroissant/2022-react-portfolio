import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "./global-js/WelcomePageBackgroundParticle.js";
import Work from "./pages/Work/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import GlobalContext from "./contexts/GlobalContext/GlobalContext";
import Contact from "./pages/Contact/Contact";

function App() {
  const [contactFormVisible, setContactFormVisible] = useState(true);
  return (
    <>
      <GlobalContext.Provider
        value={{ contactFormVisible, setContactFormVisible }}
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
