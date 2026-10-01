import React, { useState } from 'react'

const App = () => {

  function increaseNum(){
    setnum(num+1)
  }

  function decreaseNum(){
    setnum(num-1)
  }

  function jumpNum(){
    setnum(num+5)
  }

  const [num, setnum] = useState(0)
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpNum}>jump-5</button>
    </div>
  )
}

export default App