import React, { Component } from 'react'
import './buttons.css'
import CreateForm from '../createForm/createForm'

class Buttons extends Component {

  preventDefault(event) {
    event.preventDefault()
  }

  render(){
    return (
      <div>
      <label htmlFor='createItem'>Add a new place</label>
      <input type='submit' name='createItem' onClick={this.props.showForms}></input>
      {this.props.formsState
        ? <CreateForm lat={this.props.lat} long={this.props.long} name={this.props.name} preventDefault={this.props.submit} />
        : null }
      {this.props.deleteButtonState
        ? <div>
            <label htmlFor='deleteItem'>Delete clicked place</label>
            <input type='submit' name='deleteItem' onClick={this.props.deletePlace}></input>
          </div>
        : null }
      </div>
    )
  }
}
export default Buttons
