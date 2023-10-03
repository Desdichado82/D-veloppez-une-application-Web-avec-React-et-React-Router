import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
   
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
