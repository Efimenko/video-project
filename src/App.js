import React from 'react';
import Header from './header'
import Main from './main'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}

export default App;
