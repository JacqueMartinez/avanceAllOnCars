import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mensaje: ''
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
   
  }

  handleSubmit(event) {
    if(this.state.email !== '' && this.state.mensaje !==''){
      event.preventDefault();
    }else{
      alert('todos los campos son necesarios')
    }
   
  }
 render(){
   return(
    <div>
      <header className="contacto">

        <div>
          <form className="form_c">
            <h2 className="h2l">Dudas o aclaraciones,no dude en contactarnos</h2>
            <label htmlFor="email"> Tu email:</label>
            <input className="input_c"
            value={this.state.email} 
            onChange={this.handleChange.bind(this)}
            name="email" id="email" type="email"/>
            

            <label htmlFor="mensaje"> Tu mensaje:</label>
            <textarea className="textarea_c"
            value={this.state.mensaje}
            onChange={this.handleChange.bind(this)}
             name="mensaje" id="mensaje" type="text"> 
             </textarea>

             <button id="boton" onClick={this.handleSubmit.bind(this)}>Enviar</button>
           
          </form>
        </div>
      </header>
    </div>
  );
   }
}

export default App;
