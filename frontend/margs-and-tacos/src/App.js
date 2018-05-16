import React, { Component } from 'react'
import './App.css'
import Header from './header/header'
import TacosMap from './maps/tacoMap'
import MargMap from './maps/margMap'
import Spacer from './spacer/spacer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <Spacer />
          <div className='map-flex'>
          <TacosMap />
          <MargMap />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
