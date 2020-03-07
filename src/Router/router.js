import React from 'react';
import {Route, Switch} from "react-router-dom";
import Contacto from "../Page/Contacto";
import Buscar from "../Page/Buscar";
import Nosotros from "../Page/Nosotros";

const Routers = (props) => (
    <Switch>
        <Route path="/Contacto" component={Contacto}/>
        <Route path="/Buscar" component={Buscar}/>
        <Route path="/Nosotros" component={Nosotros}/>
        <Route path="/" component={Contacto}/>
    </Switch>
)

export default Routers;