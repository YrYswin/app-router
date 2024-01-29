import React, { useEffect, useState } from 'react'
import shopCss from './CarsShop.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

import noPhoto from '../../image/NoImage.png'

const API = 'http://178.128.162.248:8070/api/v1/advertisement/ads/'

export default function CarsShop() {
   const [shop, setShop] = useState([])


   async function getShop() {
      try {
         const res = await axios.get(API)
         setShop(res.data.results)
      } catch (error) {
         console.log('Error in getShop', error)
      }
   }
   getShop()

   return (
      <div className={shopCss.showcase}>
         {
            shop.map((item) => (
               <Link className={shopCss.case} to={`/shop/${item.id}`} key={item.id} itemID={item.id}>
                  <img src={item.image == null ? noPhoto : item.image} alt={item.title} />
                  <div className={shopCss.title}>
                     <h2>{item.title}</h2>
                     <span>
                        <p>{item.price} {item.currency}</p>
                        <p>{item.admin.username}</p>
                     </span>
                  </div>
               </Link>
            ))
         }
      </div>
   )
}

