import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Ourfacilities from './components/Ourfacilities';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
function App() {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[]);
  const handleClick = (button) => {
  };
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Ourfacilities/>
    <About/>
    <Rooms/>
    <Gallery/>
    </div>

  );
}

export default App;
