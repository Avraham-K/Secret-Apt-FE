import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Notification from "./pages/notification";
import NavigationBar from "./components/navbar";
import AutoComplete from "./components/AutoComplete";

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/autoComplete" element={<AutoComplete />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
