import React from 'react'
import { Link } from 'react-router-dom'

function Person({ data }) {
   return (
      <Link to={`/exam/${data.id}`} className='personItem'>
         <img src={data.image} alt={data.name} />
         <div className="title">
            <h2>{data.name}</h2>
            <p>{data.category}</p>
         </div>
      </Link>
   )
}

export default Person