import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FoodCategory from './FoodCategory'

import { useParams } from 'react-router-dom'

export default function Category() {
   const { name } = useParams()
   const [food, setFood] = useState([])

   const API_URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`

   async function getFood() {
      try {
         const res = await axios.get(API_URL)
         const data = res.data.meals
         setFood(data)
      } catch (error) {
         console.log('Error in getName:', error)
      }
   }
   useEffect(() => {
      getFood()
   }, [])

   return (
      <div>
         <h2 className='titleCategory'>{name}</h2>
         <div className="foodList">
            {
               food.map((item) => (
                  <FoodCategory key={item.idMeal} data={item} />
               ))
            }
         </div>
      </div>
   )
}

