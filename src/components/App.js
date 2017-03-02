import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import BabbleBox from '../containers/BabbleBox';
import UserInfo from '../containers/UserInfo';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main container-fluid">
          <UserInfo />
          <BabbleBox />
          
        
        </div>

        <Footer />

      </div>
    );
  }
}

export default App;
