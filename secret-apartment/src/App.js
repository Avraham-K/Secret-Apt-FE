import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Home from "./pages/home";
import Main from "./pages/main";
import Notification from "./pages/notification";
import NavigationBar from "./components/navbar";
import AutoComplete from "./components/AutoComplete";

function App() {
  const [apartment, setApartment] = useState([]);
  
  return (
  
    <GlobalContext.Provider value={{apartment, setApartment}}>
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
  )
  
}

export default App;
