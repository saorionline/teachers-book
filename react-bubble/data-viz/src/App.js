import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sitemap } from "./Sitemap";
import { Classroom } from "./Classroom";



function App() {
  return (
    <>
      <HashRouter>
        <Sitemap />
        <Routes>
          <Route path="/" element={<Classroom/>}/>
          
          <Route path="*" element={<p>Not found</p>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
