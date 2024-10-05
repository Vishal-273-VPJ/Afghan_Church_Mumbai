import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Nopage from './pages/Nopage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App