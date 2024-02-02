import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodCategory({ data }) {
   return (
      <div className='foodCategory'>
         <Link to={`/foodpage/${data.idMeal}`} >
            <h2>{data.strMeal}</h2>
            <img src={data.strMealThumb} alt="title" />
         </Link>
      </div>
   )
}

