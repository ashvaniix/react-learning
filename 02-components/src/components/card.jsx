import React from 'react'

const Card = (props) => {
  
  return (
    <div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1788295031027-a82c7b15b5ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>{props.bio}</p>
        <button>Add Profile</button>
    </div>
    </div>
  )
}

export default Card
