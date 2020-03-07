import React from 'react'
import Tab from '../Components/Tabb'
import img1 from '../Assets/Abel.png'
import img2 from '../Assets/Miguel.png'
import img3 from '../Assets/Elias.png'
import img4 from '../Assets/Pedro.png'

const miembros = [
    {name: 'Abel Cararrera F.', index: img1},
    {name: 'José Miguel Carrera P.', index: img2},
    {name: 'Elias Tejeda M.', index: img3},
    {name: 'Pedro Gonzalez H.', index: img4}
]

class Nosotros extends React.Component {
    render() {
        return (
            <div className="Nosotros">
                <Tab/>
                <div className="Nosotros_Tabs">
                    <h4>Nuestro equipo</h4>
                    <div className="Nosotros_miembros">
                        {
                            miembros.map((e, index) => (
                                <div key={index} className="Nosotros_miembros_imagen">
                                    <img src={e.index} alt="Img"/>
                                    <p>{e.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Nosotros