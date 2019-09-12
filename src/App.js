import React from 'react';
import './App.css';
import AppRouter from './Config/Router/router'
import FooterPagePro from './Components/Footer/footer';

class App extends React.Component{
  render(){
    return(
      <div>
      <AppRouter />

      {/* <br/>   <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <br/>   <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      <br/><br/> */}
     
      <FooterPagePro />
      </div>
    )
  }
}

export default App;
