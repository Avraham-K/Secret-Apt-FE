import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Home from "./pages/home";
import Main from "./pages/main";
import Notification from "./pages/notification";
import NavigationBar from "./components/navbar";

function App() {
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [neighborRes, setNeighborRes] = useState();

  return (
    <GlobalContext.Provider
      value={{ neighborhoods, setNeighborhoods, neighborRes, setNeighborRes }}
    >
      <div className="main-container">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
