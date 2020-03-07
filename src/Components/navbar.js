import React from 'react'
import Logo from '../Assets/Logo.png';
import {NavLink} from "react-router-dom";

class SlideNav extends React.Component {

    state = {
        visible: '',
        toggle: 'mobile-hidden'
    }

    onClick = () => {
        if (this.state.visible === '') {
            this.setState({visible: 'toked', toggle: 'mobile-open'});
        } else {
            this.setState({visible: '', toggle: 'mobile-hidden'});
        }
    }

    render() {
        return (
            <div>
                <div className="menu" onClick={() => this.onClick()}>
                    <div className={"bars " + this.state.visible}/>
                    <div className={"bars " + this.state.visible}/>
                    <div className={"bars " + this.state.visible}/>
                </div>
                <header className="Toolbar">
                    <nav className="Toolbar_navigation grid-50">
                        <NavLink activeClassName="active" to="/">
                            <img src={Logo} alt="All On Cars"/>
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink activeClassName="active" to="/">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/Nosotros">Nosotros</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/Buscar">Buscar</NavLink>
                            </li>
                            {/*<li>*/}
                            {/*    <NavLink activeClassName="active" to="/">Socios</NavLink>*/}
                            {/*</li>*/}
                            <li>
                                <NavLink activeClassName="active" to="/Contacto">Contacto</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/">Iniciar Sesión</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <nav className={"mobile " + this.state.toggle}>
                        <NavLink to="/">Inicio</NavLink>
                        <NavLink activeClassName="active" to="/Nosotros">Nosotros</NavLink>
                        <NavLink activeClassName="active" to="/Buscar">Buscar</NavLink>
                        <NavLink activeClassName="active" to="/Contacto">Contacto</NavLink>
                        <NavLink activeClassName="active" to="/">Iniciar Sesión</NavLink>
                    </nav>
                </header>
            </div>
        )
    }
}

export default SlideNav