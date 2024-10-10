import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
