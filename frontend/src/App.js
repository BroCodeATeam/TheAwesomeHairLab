import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";

import './App.css';

function App() {

    return (
        <div className='App'>
            <Router>
                <Navbar />
                <div className='pages'>
                    <Routes>

                    </Routes>
                </div>
            </Router>
        </div>
  );
}

export default App;
