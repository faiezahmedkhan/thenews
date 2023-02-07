import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News'
import Home from './components/home'
import Newslist from './components/Newslist';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/general" element={<News key='general' pageSize={15} country='in' category='general'/>}>General</Route>
          <Route exact path="/business" element={<News key='business' pageSize={15} country='in' category='business'/>}>Business</Route>
          <Route exact path="/entertainment" element={<News key='entertainment' pageSize={15} country='in' category='entertainment'/>}>Entertainment</Route>
          <Route exact path="/health" element={<News key='health'  pageSize={15} country='in' category='health'/>}>Health</Route>
          <Route exact path="/science" element={<News key='science'  pageSize={15} country='in' category='science'/>}>Science</Route>
          <Route exact path="/sports" element={<News key='sports' pageSize={15} country='in' category='sports'/>}>Sports</Route>
          <Route exact path="/technology" element={<News key='technology' pageSize={15} country='in' category='technology'/>}>Technology</Route>
    
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
