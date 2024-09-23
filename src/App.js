import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contacts';
import Navbar from './Navbar';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
