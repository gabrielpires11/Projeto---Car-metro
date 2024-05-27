import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './pages/LoginForm.css';
import './pages/LoginForm.jsx';
import LoginForm from './pages/LoginForm.jsx';
import Home from "./pages/Home.jsx";
import Idev2 from "./pages/Idev2.jsx";
import DetalhesAluno from './pages/Maisdetalhes.jsx';

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/idev2" element={<Idev2/>}/>
          <Route path="/detalhesAluno" element={<DetalhesAluno/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
