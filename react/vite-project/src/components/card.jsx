import React from 'react'
import { Bookmark } from 'lucide-react';
const card = (props) => {
  return (
     <div className="card">
        <div className="top"> 
          <img src={props.logo}></img>
          <button> Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.company}</h3> <span>{props.datePosted}</span>
          <h2>{props.post}</h2>
          <div className='tag'><h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4></div>
        </div>
        <div className="bottom">
            <div className='payinfo'>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now </button>
        </div>
      </div>
  )
}

export default card
