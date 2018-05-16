import React from 'react'
import './updateForm.css'

 const UpdateForm = ({clickedId, showForms, lat, long, name, updatePlace}) => {

  return (
    <div>
      <h3>Update an entry here:</h3>
      <form>
        <label htmlFor='lat'>Enter a latitude</label>
        <input type='number' name='lat' placeholder='latitude' onChange={lat}></input>
        <label htmlFor='long'>Enter a longitude</label>
        <input type='number' name='long' placeholder='longitude' onChange={long}></input>
        <label htmlFor='name'>Enter the name</label>
        <input type='text' name='name' placeholder='name' onChange={name}></input>
        <input type='submit' onClick={updatePlace}></input>
      </form>
    </div>
  )
}

export default UpdateForm
