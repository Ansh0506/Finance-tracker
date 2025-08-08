/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'

function App() {

  return (
    <>
        <h1 className="finance">FINANCE TRACKER</h1>
          <div className="header">
            <button className="home_btn">HOME</button>
            <button className="graph_btn">Graph</button>
            <button className="profile_btn">Profile</button>
          </div>

        <div className="content_home">
          <Home/>
          <button className="add_btn">ADD ➕</button>
        </div>
        
    </>
  )
}

export default App
