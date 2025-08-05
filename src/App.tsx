

import { useState } from 'react';
import styles from './App.module.css';  
import { Navbar } from '../components/Navbar/Navbar';
import { Landingpagemodcont } from '../components/landingpagemodulecont/Landingpagemodcont'
// import { Landingpagemodule } from '../components/landingpagemodules/Landingpagemodule';


function App()  {
  const [count, setCount] = useState(0);

  console.log(count, setCount);

  return (
    <div className={styles.App}> 
      <Navbar/>
      <Landingpagemodcont/>
    </div>
  );
}

export default App;