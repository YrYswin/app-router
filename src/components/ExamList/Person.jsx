import React from 'react'
import { Link } from 'react-router-dom'

function Person({ data }) {
   return (
      <Link to={`/personpage/${data.id}`} className='personItem'>
         <img src={data.image} alt={data.name} />
         <h2>{data.name}</h2>
         <div className="title">
            <p>{data.category}</p>
         </div>
      </Link>
   )
}

export default Person