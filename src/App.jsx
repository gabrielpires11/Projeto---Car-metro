import { BrowserRouter, Routes, Route } from "react-router-dom";

import './pages/LoginForm.css';
import './pages/LoginForm.jsx';
import React from 'react';
import LoginForm from './pages/LoginForm.jsx';
import Home from "./pages/Home.jsx";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
