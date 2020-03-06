import React from 'react';


class Tabb extends React.Component{
 render(){
      return(
        <div className="tabs">
       <Tabs >
         <Tab label="Misión" >
           <div>
          
             <p >Organizar la información del mundo y hacerla universalmente accesible y útil.</p>
           </div>
         </Tab>
         <Tab label="Visión">
           <div>
          
             <p>Refrescar al mundo. Inspirar momentos de optimismo y felicidad. Crear valor y hacer la diferencia.</p>
           </div>
         </Tab>
       </Tabs>
      </div>
      
    )
      }
}

class Tabs extends React.Component{
  state ={
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {

    this.setState({ activeTab: tab });
  };
  render(){
    
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
         
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div className="tab-content">{content}</div>
        
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
   
  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
       return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
    })}
    </div>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
 
   
  export default Tabb;