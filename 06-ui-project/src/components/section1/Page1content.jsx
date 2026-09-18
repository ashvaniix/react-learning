import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'


const Page1content = (props) => {
  return (
    <div className='h-[90vh] py-10 px-15 flex items-center gap-10'>
           <Leftcontent/>
           <Rightcontent users = {props.users}/>
          
    </div>
  )
}

export default Page1content