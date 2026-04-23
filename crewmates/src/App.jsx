import { useState } from 'react'
import { Link } from 'react-router'
import './App.css'
import { supabase } from './Client'

function App() {
  
  return (
    <>
      <h1>Dragon Farm</h1>
      <h4>Create your dream dragon squad</h4>
      <Link to="/create">
        <button>Create a Dragon</button>
      </Link>
      <Link to="/view">
        <button>View Dragons</button>
      </Link>
    </>
  )
}

export default App
