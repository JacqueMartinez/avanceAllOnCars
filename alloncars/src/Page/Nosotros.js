import React from 'react'
import Tab from '../Components/Tabb'
import img1 from '../Assets/Abel.png'
import img2 from '../Assets/Miguel.png'
import img3 from '../Assets/Elias.png'
import img4 from '../Assets/Pedro.png'
const Nosotros = () => (

    <div className="App">
        <header className="nosotros">

            <div >
                <Tab />
            </div>
            <div className="tabs">
           <h4>Nuestro equipo</h4>
           <div className="miembros">
               <div className="base_imagen">
               <img src={img1} alt="Img"></img>
                  <p className="p">Abel Cararrera F.</p>
               </div>
               <div className="base_imagen">
               <img src={img2} alt="Img"></img>
                  <p className="p">Jose Miguel Carrera P.</p>
               </div>
               <div className="base_imagen">
               <img src={img3} alt="Img"></img>
                  <p className="p">Elias Tejeda M.</p>
               </div>
               <div className="base_imagen4">
               <img src={img4} alt="Img"></img>
                  <p className="p" >Pedro Gonzalez H. </p>
               </div>

           </div>
            </div>
        </header>
    </div>


)

export default Nosotros