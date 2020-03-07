import React from 'react'


class Buscar extends React.Component {
    render() {
        return (
            <div className="Buscar">
                <div className="Buscar_form_b">
                    <h1>Escribe el servicio que necesites</h1>
                    <input
                        type="search"
                        name="search "
                        placeholder="  Ejemplo: cambio de balatas, Ajuste de motor.."
                    />
                    <button>Buscar</button>
                </div>
            </div>
        )
    }
}

export default Buscar