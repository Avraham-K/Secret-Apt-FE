import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Notification from "./pages/notification";

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/main" element={<Main />}/>
          <Route path="/notification" element={<Notification />}/>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
