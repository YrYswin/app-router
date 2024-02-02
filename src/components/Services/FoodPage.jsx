import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

function FoodPage() {
   const { id } = useParams()
   const [food, setFood] = useState('')

   async function getFood(id) {
      try {
         const { data } = await axios.get(`${API_URL}${id}`)
         // console.log(data.meals)
         setFood(data.meals[0])
      } catch (error) {
         console.log('Error in FoodPage getFood', error)
      }
   }
   // console.log(food)

   useEffect(() => {
      getFood(id)
   })

   return (
      <div>
         <h2>
            {food.strArea}
         </h2>
         <img src={food.strMealThumb} alt="title" />
      </div>
   )
}

export default FoodPage