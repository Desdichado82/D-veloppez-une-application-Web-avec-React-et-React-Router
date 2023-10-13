import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lodgement from './pages/Lodgement';
import Propos from './pages/Propos';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import '../src/global.css'; // Import the global CSS file

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lodgement/:id" element={<Lodgement />} />
        <Route path="/Propos" element={<Propos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);



