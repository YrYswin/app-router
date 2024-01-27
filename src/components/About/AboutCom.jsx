import React from 'react'
import products from '../../Data/product'
import itemCss from './AboutCom.module.css'
import { Link } from 'react-router-dom';

export default function AboutCom() {
   function discounting(a, b) {
      const discountPercentage = (((a - b) / a) * 100).toFixed(0);
      const discountText = b !== null ? `Discount ${discountPercentage}%` : '';
      return discountText;
   }
   return (
      <div className={itemCss.container}>
         {
            products.map((item) => (
               <Link to={`/product/${item.id}`} className={itemCss.item} key={item.id}>
                  <img src={item.image} alt={item.id} />
                  <h2>{item.title}</h2>
                  <div className={itemCss.price}>

                     <h4 className={item.discount && itemCss.newPrice}>
                        {!item.discount ? item.price : item.discountedPrice} $
                     </h4>

                     <h4 className={itemCss.oldPrice}>
                        {item.discount && item.price}
                     </h4>

                     <h4>{item.rating}</h4>
                  </div>

                  <span className={item.discountedPrice && itemCss.disc}>
                     {item.discount && discounting(item.price, item.discountedPrice)}
                  </span>

                  <div className={itemCss.items}>
                     {
                        item.images.map((itemImg, index) => (
                           <img className='miniImg' src={itemImg} key={index} alt='title' />

                        ))
                     }
                  </div>
               </Link>
            ))
         }
      </div>
   )
}