import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "../components/app/App"
import Header from "../components/header/Header"
import Loader from '../components/header/Loader'
import Home from '../pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Cats from '../pages/CatsPage'
import CatsDetailsPage from '../pages/CatsDetailsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Loader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cats' element={<Cats />} />
        <Route path="/cats/:id" element={<CatsDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
