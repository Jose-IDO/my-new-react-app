import React from 'react'
import { ButtonCont } from '../ButtonContainer/ButtonCont'
import { SearchBar } from '../SearchBar/SearchBar'
import styles from './navbar.module.css'
import { Overlay } from '../overlay/Overlay'


// type Props = {
//     children: React.ReactNode;
//     className?: string;
    

// }

export const  Navbar  = () => {
  // console.log(className);
  console.log( React)
  return (
    // <div className = {styles.navbar}>
    <div className = {styles.navbar}>
      <div className = {styles.navbarcontent}>

          <div className={styles.searchcontainer}>
            <SearchBar />
          </div>
          
          <ButtonCont/>

      </div>
       
    </div>
  )
}