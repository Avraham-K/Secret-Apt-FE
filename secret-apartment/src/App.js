import React from "react";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
