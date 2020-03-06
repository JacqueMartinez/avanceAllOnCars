import React from 'react'
import '../Components/Toolbar.css'
import drawerToggleButton from'./SideDrawer/Toogle'
const bar = props =>(
    <div>
<header className="toolbar">
        <nav className="toolbar-navigation">
            <div>
                <drawerToggleButton/>
            </div>
            <div className="toolbar-logo"><a href="/"> The logo</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
    
)

export default bar