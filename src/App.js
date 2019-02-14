import React from 'react';
import Header from './header'
import Main from './main'
import './index.css'

class App extends React.Component {
  render() {
    return (
      [
        <Header />,
        <Main />
      ]
    )
  }
}

export default App;
