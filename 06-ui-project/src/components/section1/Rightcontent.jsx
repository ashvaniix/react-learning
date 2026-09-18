import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props)
  return (
    <div id='right' className=' h-full w-3/4 flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6'>
       
        {props.users.map(function(elem,idx){
          return <Rightcard key = {idx} id = {idx} img = {elem.img} tag = {elem.tag} />
        })}
        
    </div>
  )
}

export default Rightcontent