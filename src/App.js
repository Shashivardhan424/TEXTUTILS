import About from './components/About';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './TextForm.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const[mode,setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#000';
    }
      else{
        setMode('light');
         document.body.style.background='white';
    }
  }
  return (
    <>
     <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter the text to change it....?" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
