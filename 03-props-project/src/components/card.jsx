import React from 'react'
import { Bookmark } from "lucide-react";
const card = (props) => {
    
  return (
    <div>
       <div className="card">
        <div><div className="top">
          <img
            src={props.logo}
            alt=""
          />
          <button>
            Save <Bookmark size={18} />
          </button>
        </div>
        <div className="middle">
          <h3>
            {props.company} <span>{props.posted}</span>
          </h3>
          <h2>{props.title}</h2>
          <div className="middle-part">
            <h4>{props.type}</h4>
            <h4>{props.level}</h4>
          </div>
        </div></div>
        <div className="bottom">
          <div>
            {" "}
            <h3>{props.salary}</h3>
            <span>{props.location}</span>
          </div>
          <button>Apply now</button>
        </div>
      </div>
      </div>
  )
}

export default card
