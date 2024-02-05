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
         // console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getPerson(id)
   }, [])

   const hundleChange = (e) => {
      const { name, value } = e.target
      setPerson((item) => ({ ...item, [name]: value }))
   }

   async function updatePerson(id) {
      try {
         const res = await axios.put(`${API}/${id}`, person, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         if (res.status = 200) {
            getPerson(id)
         }
      } catch (error) {
         console.log(error)
      }
   }
   async function deletePerson(id) {
      try {
         const res = await axios.delete(`${API}/${id}`)
         if (res.status === 200) {
            getPerson(id)
         }
      } catch (error) {
         console.log(error)
      }
   }


   return (
      <div>
         <div className='form'>
            <input
               placeholder='name'
               type="text" name='name'
               onChange={hundleChange}
               value={person.name}
            />
            <input
               placeholder='category'
               type="text" name='category'
               onChange={hundleChange}
               value={person.category}
            />
            <input
               placeholder='image'
               type="url" name='image'
               onChange={hundleChange}
               value={person.image}
            />
            <button onClick={() => updatePerson(person.id)}>
               Update Person
            </button>
         </div>
         <div className="personContainer">
            <img src={person.image} alt={person.name} />
            <p>{person.name}</p>
            <p>{person.category}</p>
         </div>
         <div className="delete">
            <button onClick={() => deletePerson(person.id)}>Delete Person</button>
         </div>
      </div>
   )
}

export default PersonPage