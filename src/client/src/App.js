import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
