import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products'

function PersonPage() {
   const { id } = useParams()
   const [person, setPerson] = useState('')

   async function getPerson(id) {
      try {
         const { data } = await axios.get(`${API}/${id}`)
         setPerson(data)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      getPerson(id)
   }, [])


   return (
      <div>
         <img src={person.image} alt={person.name} />
         <p>{person.name}</p>
      </div>
   )
}

export default PersonPage