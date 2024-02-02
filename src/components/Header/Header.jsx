import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import Logo from './Logo.png'
import Search from './search.svg'

export default function Header() {

   return (
      <div className={classes.header} >
         <div className={classes.logo}>
            <img src={Logo} alt='logo' />
            <h2><span>L</span><span>o</span><span>g</span><span>o</span></h2>
         </div>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/service'>Service</Link>
         <Link to='/exam'>Exam</Link>
         <div className={classes.search}>
            <input type="text" placeholder='search' />
            <button className={classes.find}><img src={Search} alt="search" /></button>
         </div>
      </div>
   )
}
// className={active == 'HOME' && classes.active} onClick={activeChange('HOME')}
// className={active == 'ABOUT' && classes.active} onClick={activeChange('ABOUT')}
// className={active == 'CONTACT' && classes.active} onClick={activeChange('CONTACT')}
// className={active == 'SERVICE' && classes.active} onClick={activeChange('SERVICE')}
// const [active, setActive] = useState('s')
//    function activeChange(status) {
//       if (status == status) {
//          setActive(status)
//       }
//    }