import { useState } from 'react'
import Hero from './Components/Hero'
import ProductsScreen from './Screens/ProductsScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route path='/' element={<ProductsScreen />} />
      </Routes>
    </Router>
  )
}

export default App
