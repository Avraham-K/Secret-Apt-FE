import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { GlobalContext } from "./context/global-context";
import Landing from "./pages/landing";
import Main from "./pages/main";
import Notification from "./pages/notification";
import NavigationBar from "./components/navbar";

function App() {
  const [users, setusers] = useState([]);
  
  return (
  
    <GlobalContext.Provider value={{users, setusers}}>
      <div className="main-container">
      <BrowserRouter>
      <NavigationBar />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/main" element={<Main />} />
      <Route path="/notification" element={<Notification />} />

      </Routes>
      </BrowserRouter>

     
      </div>
    </GlobalContext.Provider>
  )
  
}

export default App;
