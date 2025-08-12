

import { useState } from 'react';
import styles from './App.module.css';  
import { Navbar } from '../components/Navbar/Navbar';
import { Landingpagemodcont } from '../components/landingpagemodulecont/Landingpagemodcont'
import { Overlay } from '../components/overlay/Overlay';
// import { Landingpagemodule } from '../components/landingpagemodules/Landingpagemodule';
// import {Login} from '../components/Authentication/Login'


function App()  {
  const [Loginformisvisible, setLoginformisvisible] = useState(false);
  const openLoginOverlay = () => setLoginformisvisible(true);
  const closeLoginOverlay = () => setLoginformisvisible(false);
  // const [count, setCount] = useState(0);

  // console.log(count, setCount);

  return (
    <div className={styles.App}>
      <Navbar LoginButtonClicked ={openLoginOverlay}/>
      <Overlay isVisible= {Loginformisvisible} closeoverlay = {closeLoginOverlay}/> 
      <Landingpagemodcont/>
     
    </div>
  );
}

export default App;