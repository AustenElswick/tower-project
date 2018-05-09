import React, { Component } from 'react'
import './App.css'
import Header from './header/header'
import TacosAndMargsMap from './map/map'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <TacosAndMargsMap />
        </body>
      </div>
    )
  }
}

export default App;
