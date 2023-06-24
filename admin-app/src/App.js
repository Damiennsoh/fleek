import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import About from './pages/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;