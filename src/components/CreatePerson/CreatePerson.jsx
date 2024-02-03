import React, { useState, useEffect } from 'react'
import './CreatePerson.css'
import axios from 'axios'

const API = 'https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/products'

export default function CreatePerson({ updatePage }) {
   const [user, setUser] = useState({
      name: '',
      category: '',
      image: '',
   })

   const hundleChange = (e) => {
      const { name, value } = e.target
      setUser((item) => ({ ...item, [name]: value }))
   }

   async function createPerosn() {
      try {
         const res = await axios.post(API, user,)
         if (res.status === 201) {
            alert('You have achieved succes')
            setUser({
               name: '',
               category: '',
               image: '',
            })
            updatePage()
         }
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className='form'>
         <input
            onChange={hundleChange}
            value={user.name}
            placeholder='name'
            type="text" name='name'
         />
         <input
            onChange={hundleChange}
            value={user.category}
            placeholder='category'
            type="text" name='category'
         />
         <input
            onChange={hundleChange}
            value={user.image}
            placeholder='image'
            type="url" name='image'
         />
         <button onClick={createPerosn}>
            Create Person
         </button>
      </div>
   )
}