import React from 'react';


class Tabb extends React.Component {
    render() {
        return (
            <div className="Nosotros_Tabs">
                <div>
                    <Tabs>
                        <Tab label="Misión">
                            <div>
                                <p>Ofrecer soluciones innovadoras en el desarrollo de productos y servicios a través de las
                                    nuevas tecnologías y medios convencionales con costos accesibles para el consumidor
                                    mediante nuestras diversas marcas.</p>
                            </div>
                        </Tab>
                        <Tab label="Visión">
                            <div>
                                <p>Formar un conjunto de marcas líderes en el mercado que brinden seguridad, facilidad y que
                                    sean de fácil acceso en las necesidades de nuestros usuarios.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

class Tabs extends React.Component {

    state = {
        activeTab: this.props.children[0].props.label
    }

    changeTab = (tab) => {
        this.setState({activeTab: tab});
    };

    render() {
        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({buttons, changeTab, activeTab}) => {
    return (
        <div className="Nosotros_Tabs_button">
            {buttons.map((button, index) => {
                console.log(button, activeTab, (button === activeTab))
                return <button
                    key={index}
                    style={{
                        textDecorationLine: (button === activeTab) ? 'underline' : 'none'
                    }}
                    onClick={() => changeTab(button)}
                >
                    {button}
                </button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}


export default Tabb;