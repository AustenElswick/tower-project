import React from 'react'
import './createForm.css'

const CreateForm = ({lat, long, name, preventDefault}) => {

  return (
    <div>
      <h3>Create a place here</h3>
      <form>
        <label htmlFor='lat'>Enter a latitude</label>
        <input type='number' name='lat' placeholder='latitude' onChange={lat}></input>
        <label htmlFor='long'>Enter a longitude</label>
        <input type='number' name='long' placeholder='longitude' onChange={long}></input>
        <label htmlFor='name'>Enter the name</label>
        <input type='text' name='name' placeholder='name' onChange={name}></input>
        <input type='submit' onClick={preventDefault}></input>
      </form>
    </div>
  )
}

export default CreateForm
