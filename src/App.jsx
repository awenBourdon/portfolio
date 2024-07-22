import Home from "./Pages/Home"
import CV from "./Pages/CV"
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import React from "react"

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cv" element={<CV/>}/>
      </Routes>
    </Router>
  )
}

export default App
