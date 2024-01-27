import React from 'react'
import footer from './Footer.module.css'
import Logo from '../Header/Logo.png'

export default function Footer() {
   return (
      <div className={footer.footer}>
         <div className={footer.logo}>
            <img src={Logo} alt="logo" />
            <h2>Logo</h2>
         </div>
         <div className={footer.about}>
            <ul>
               <li>what 1</li>
               <li>what 2</li>
               <li>what 3</li>
               <li>what 4</li>
            </ul>
         </div>
         <div className={footer.society}>
            <img src={Logo} alt="instagram" />
            <img src={Logo} alt="VK" />
            <img src={Logo} alt="Whatsapp" />
            <img src={Logo} alt="Telegram" />
         </div>
      </div>
   )
}