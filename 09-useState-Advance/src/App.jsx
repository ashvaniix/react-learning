import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({name:'Sarthak', age: 22})

   const btnClick =() => {
   const newNum = {...num}
   newNum.name = 'Ashvani'
   newNum.age = 26

   

   setNum(newNum)

  }

  return (
    <div>
      <h1>{num.name}, {num.age}</h1>
<button onClick={btnClick} >click</button>
    </div>
  )
}

export default App