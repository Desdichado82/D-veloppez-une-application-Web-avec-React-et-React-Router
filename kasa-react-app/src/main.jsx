import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
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
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="Lodgement/:id" element={<Lodgement />} />
          <Route path="Propos" element={<Propos />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

/*
This script sets up a React application using the createRoot function from react-dom/client.
It imports necessary components and libraries such as BrowserRouter, Route, Routes, and various pages/components.
The application's routing is defined within the <Router> component. It uses the Routes element to define the routes and their corresponding components.
The application has routes for the Home page, Lodgement page with dynamic :id parameter, About (Propos) page, and a catch-all route for displaying errors.
The header and footer components are rendered on every page.
Additionally, a global CSS file (global.css) is imported to style the entire application.
*/



