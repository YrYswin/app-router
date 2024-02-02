import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import './Examing.css'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products'

function Examing() {
   const [persons, setPersons] = useState([])

   async function getPersons() {
      try {
         const { data } = await axios.get(API)
         setPersons(data)
      } catch (error) {
         console.log('Error in the getPerson', error)
      }
   }
   useEffect(() => {
      getPersons()
   })

   return (
      <div>
         <div className="personsList">
            {
               persons.map((item) => (
                  <Person key={item.id} data={item} />
               ))
            }
         </div>
      </div>
   )
}

export default Examing