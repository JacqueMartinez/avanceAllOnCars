import React from 'react';
import Routers from './Router/router';
import SlideNav from "./Components/navbar";


class App extends React.Component {
    render() {
        return (
            <div>
                <SlideNav/>
                <Routers/>
            </div>
        )
    }
}


export default App;
