import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { supabase } from './Client'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Dragon Farm</h1>
      <h4>Create your dream dragon squad</h4>
      <Link to="/create">
        <button>Create a Dragon</button>
      </Link>
      <div className="dragon-container">
        <h3>Your Dragon Squad</h3>
        <div className="dragon-list">
          {/*Your dragon squad will appear here*/}
        </div>
      </div>
    </>
  )
}

export default App
