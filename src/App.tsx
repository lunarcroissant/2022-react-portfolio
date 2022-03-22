import React from "react";
import logo from "./logo.svg";
import "./App.css";

import "./global-js/WelcomePageBackgroundParticle.js";
import Work from "./pages/Work/Work";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Work />} />
            <Route path="profile" element={<Profile data={[]} />} />
            <Route path="contact" element={<Work />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Work /> */}
    </>
  );
}

export default App;
