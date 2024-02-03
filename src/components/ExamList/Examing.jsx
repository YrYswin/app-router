import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './Person'
import './Examing.css'
import CreatePerson from '../CreatePerson/CreatePerson'
import Loading from '../CreatePerson/Loading'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products'

function Examing() {
   const [persons, setPersons] = useState([])
   const [service, setService] = useState(false)
   const [loading, setLoading] = useState(false)

   function updatePage() {
      setService(!service)
   }

   async function getPersons() {
      setLoading(true)
      try {
         const { data } = await axios.get(API)
         setPersons(data)
         setLoading(false)
      } catch (error) {
         console.log('Error in the getPerson', error)
         setLoading(false)
      }
   }

   useEffect(() => {
      getPersons()
   }, [service])

   if (loading) {
      <Loading />
   }

   return (
      <div>
         <CreatePerson updatePage={updatePage} />
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