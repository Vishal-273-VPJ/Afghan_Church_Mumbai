import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donation from './pages/Donation';
import Nopage from './pages/Nopage';
import ContactPage from './pages/ContactPage';
import Leadership from './pages/Leadership';
import Hosanna from './pages/Hosanna';
import History from './pages/History';
import Sermon from './pages/Sermon';
import SupportPage from './pages/SupportPage';
import Events from './pages/Events';
import EventDescription from './pages/EventDescription';
import RenovationStory from './pages/RenovationStory';
import Gallery from './pages/Gallery';

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
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/events' element={<Events />} />
          <Route path='/event/:id' element={<EventDescription />} /> {/* Only numbers for id */}
          <Route path='/renovation' element={<RenovationStory />} />
          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
