import React from "react";


class App extends React.Component {

    state = {
        email: '',
        mensaje: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        if (this.state.email !== '' && this.state.mensaje !== '') {
            event.preventDefault();
        } else {
            alert('todos los campos son necesarios')
        }
    }

    render() {
        return (
            <div className="Contacto">
                <div className="Contacto_form_c">
                    <p>Dudas o aclaraciones, no dude en contactarnos</p>
                    <label> Tú email:</label>
                    <input
                        value={this.state.email}
                        onChange={this.handleChange.bind(this)}
                        name="email"
                        id="email"
                        placeholder={'ejemplo@ejemplo.com'}
                        type="email"
                    />
                    <label htmlFor="mensaje"> Tú mensaje:</label>
                    <textarea
                        value={this.state.mensaje}
                        onChange={this.handleChange.bind(this)}
                        name="mensaje"
                        id="mensaje"
                        type="text"
                        placeholder={'Escribe tu mensaje acá...'}
                    />

                    <button
                        id="boton"
                        onClick={this.handleSubmit}
                    > Enviar
                    </button>

                </div>
            </div>
        )
    }
}

export default App;
