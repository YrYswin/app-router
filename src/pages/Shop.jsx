import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import noPhoto from '../image/NoImage.png'

const API = 'http://178.128.162.248:8070/api/v1/advertisement/ads/'

export default function Shop() {
   const { id } = useParams()
   const [item, setItem] = useState([''])
   getItem(id)

   async function getItem(id) {
      try {
         const res = await axios.get(`${API}/${id}`)
         setItem(res.data)
      } catch (error) {
         console.log('Error in getItem(this)', error)
      }
   }

   return (
      <div>
         <div>
            <img src={item.image == null ? noPhoto : item.image} alt={item.title} />
         </div>
         <div>
            <h1>{item.title}</h1>
            {item.text}
            {item.price}
            {item.currency}
            {item.phone_1}
         </div>
      </div>
   )
}

