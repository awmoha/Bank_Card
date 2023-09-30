import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"; // Uppdatera importen

import { Home } from "./pages/home";
import { AddCard } from "./pages/addCard";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/walletSlice";

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes> {/* Använd Routes istället för Switch */}
        <Route path="/" element={<Home />} /> {/* Använd element istället för render */}
        <Route path="/addcard" element={<AddCard />} /> {/* Använd element istället för render */}
      </Routes>
    </div>
  );
}

export default App;
