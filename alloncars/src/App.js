import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Contacto from './Page/Contacto'
import Buscar from './Page/Buscar'
import Nosotros from './Page/Nosotros'
import navBar from './Components/navbar'


function App(){
  return(
    <BrowserRouter>
     <Route path="/Contacto"  component={Contacto}/>
     <Route path="/Buscar"  component={Buscar}/>
     <Route path="/Nosotros"  component={Nosotros}/>
     <Route path="/navBar"  component={navBar}/>
 
  

     <p>{JSON.stringify()}</p>
    </BrowserRouter>
  )
}


export default App
