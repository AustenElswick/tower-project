import React from 'react'
import './placeDetails.css'

const PlaceDetails = ({lat, long}) => {

  return (
    <div>
      <h3>latitude and longitude of the selected place</h3>
      <p>latitude: {lat}</p>
      <p>longitude: {long}</p>
    </div>
  )
}

export default PlaceDetails
