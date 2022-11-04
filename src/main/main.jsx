import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "../components/app/App"
import Header from "../components/header/Header"
import Loader from '../components/header/Loader'
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Cats from '../pages/Cats'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Loader />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cats' element={<Cats />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
