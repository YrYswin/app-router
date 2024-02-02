import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemCategories from './ItemCategories'
import './Service.css'

const API = 'https://www.themealdb.com/api/json/v1/1/categories.php'

export default function Services() {
   const [category, setCategory] = useState([])

   async function getCategory() {
      try {
         const { data } = await axios(API)
         // console.log(data.categories)
         setCategory(data.categories)
      } catch (error) {
         console.log('Error in getCategory:', error)
      }
   }
   useEffect(() => {
      getCategory()
   }, [])

   return (
      <div>
         <div className="category">
            {
               category.map((item) => (
                  <ItemCategories key={item.idCategory} data={item} />
               ))
            }
         </div>
      </div>
   )
}