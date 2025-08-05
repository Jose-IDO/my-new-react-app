import React from 'react'
import styles from './landingpagemodcont.module.css';
import { Landingpagemodule } from '../landingpagemodules/Landingpagemodule';
import { Buttons } from '../buttons/Buttons'
import { LinksView } from '../LinksView/LinksView';
import { Footer } from '../Footer/Footer';

export const Landingpagemodcont: React.FC<any> = () => {
  return (
    <>
      <div className = {styles.landingpagemodulecont} >
        
        <Landingpagemodule modcolor = "modcolorone" > 
          <div className = {styles.firstmodule}>
            South Africas #1 link storage solution
            <div className = {styles.subtext}>
              Save, organize, and access your favorite links from anywhere - no browser limitations
            </div>
                <Buttons bgColor = "contbuttonone">Add your first link  </Buttons>
          </div>  
        </Landingpagemodule>

       
        <Landingpagemodule modcolor = "modcolorone" > 
          <div className = {styles.secondmodule}>
            <LinksView />
          </div>  
        </Landingpagemodule>
          
       
        {/* <Landingpagemodule modcolor = "modcolorone" > 
          <div className = {styles.thirdmodule}>
            
          </div>  
        </Landingpagemodule> */}
      </div>
      
     
      <Footer />
    </>
  )
}