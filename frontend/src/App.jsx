import { useState } from 'react'
import Hero from './Components/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Hero />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  )
}

export default App
