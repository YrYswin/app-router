import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/product'

export default function Product() {
   const { id } = useParams()
   const findProduct = products.find((x) => x.id === parseInt(id))
   const [image, setImage] = useState(findProduct.image)


   console.log(findProduct)
   return (
      <div className='product'>
         <img
            className='productImg'
            src={image}
            alt={findProduct.title}
         />
         {
            findProduct.images.map((item, index) => (
               <img
                  className='miniImg'
                  src={item}
                  key={index}
                  alt='title'
                  onClick={() => setImage(item)}
               />
            ))
         }
      </div>
   )
}

