import React from 'react'
import "./index.css"
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import Header from './components/Header/Header'
import RegistrationForm from './components/Registration/Register'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element ={ <RegistrationForm /> } />l
      </Routes>
    </Router>

  )
}

export default App
