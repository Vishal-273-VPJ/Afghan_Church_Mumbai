import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Nopage from './pages/Nopage';
import ContactPage from './pages/ContactPage';
import Leadership from './pages/Leadership'
import Hosanna from './pages/Hosanna';
import History from './pages/History'
import Sermon from './pages/Sermon';
import SupportPage from './pages/SupportPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/donation' element={<Donation />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/hosanna' element={<Hosanna />} />
          <Route path='/history' element={<History />} />
          <Route path='/sermon' element={<Sermon />} />
          <Route path='/services' element={<SupportPage />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App