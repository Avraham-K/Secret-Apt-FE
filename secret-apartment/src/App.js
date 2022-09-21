<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Main from "./pages/main";
=======
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Notification from "./pages/notification";
import NavigationBar from "./components/navbar";
>>>>>>> 2dabe75896000101863ddb1a959dd547776e8e22

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Main/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/" element={<Main/>}/>
=======
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/notification" element={<Notification />} />
>>>>>>> 2dabe75896000101863ddb1a959dd547776e8e22
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
