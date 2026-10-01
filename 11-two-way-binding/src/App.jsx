import { CalendarPlus2 } from 'lucide'
import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState('')
const sunbmitHandler  = (e) => {
  e.preventDefault()
  console.log('form submitted by', name)
  setname('')
}

  return (
    <div>
      <form onSubmit={(e)=>{
        sunbmitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name'
        value={name}
        onChange={
          (e) => {
            setname(e.target.value)
          }
        } />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App