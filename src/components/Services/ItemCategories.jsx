import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'

export default function ItemCategories({ data }) {
   return (
      <div className='item-category'>
         <Link to={`/category/${data.strCategory}`}>
            <img src={data.strCategoryThumb} alt='category img' />
            <h2>{data.strCategory}</h2>
            <p>{data.strCategoryDescription.substring(0, 50)}</p>
         </Link>
      </div>
   )
}