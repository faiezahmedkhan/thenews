import React from 'react';
import Navbar from './components/Navbar';
import Newslist from './components/Newslist';
import About from './components/about'
import Services from './components/services'
import Home from './components/home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Newslist" element={<Newslist />}></Route>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
