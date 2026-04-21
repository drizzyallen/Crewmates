import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Dragon Farm</h1>
      <h4>Create your dream dragon squad</h4>

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
