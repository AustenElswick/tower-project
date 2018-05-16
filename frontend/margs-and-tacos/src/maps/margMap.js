import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './margMap.css'
import UpdateForm from '../updateform/updateForm'
import Buttons from '../buttons/buttons'
import PlaceDetails from '../placedetails/placeDetails'

const CustomMarker = ({ text }) => <div className="marg-marker"><p>{text}</p></div>;
let apiURL = 'https://sheltered-harbor-96340.herokuapp.com/'

class MargsMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.752318,
      lng: -104.996735
    },
    zoom: 14
  }

  constructor() {
    super()
    this.state = {
      margData: [],
      updateForm: false,
      showForms: false,
      clickedId: null,
      latInfo: null,
      longInfo: null,
      nameInfo: null,
      markerClicked: false,
      singleMarg: []
    }
    this.switchMargFormState = this.switchMargFormState.bind(this)
    this.getIdOfClicked = this.getIdOfClicked.bind(this)
    this.switchForms = this.switchForms.bind(this)
    this.deleteButtonSwitch = this.deleteButtonSwitch.bind(this)
    this.MargPlaceDetails = this.MargPlaceDetails.bind(this)
  }

  componentDidMount() {
    return fetch(apiURL + 'margs')
    .then(margs => margs.json())
    .then(margs => {
      this.setState({margData: margs.margs})
    })
  }

  switchMargFormState() {
    const updateForm = this.state.updateForm
    this.setState({updateForm: !updateForm})
  }

  getIdOfClicked(event) {
    this.setState({clickedId: event})
  }

  getIdAndSwitchMargFormStateAndAddDeleteAndGetDetails(event) {
    this.getIdOfClicked(event)
    this.switchMargFormState()
    this.deleteButtonSwitch()
    this.MargPlaceDetails(event)
  }

  switchForms() {
    const showforms = this.state.showForms
    this.setState({showForms: !showforms})
  }

  deleteButtonSwitch() {
    const markerClicked = this.state.markerClicked
    this.setState({markerClicked: !markerClicked})
  }

  submitUpdate(event) {
   event.preventDefault()
   return fetch(apiURL + 'margs', {
     method: 'PUT',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       id: this.state.clickedId,
       lat: this.state.latInfo,
       long: this.state.longInfo,
       name: this.state.nameInfo
     })
   })
   .then(res => res.json())
 }

 createMargPlace(event) {
   event.preventDefault()
   return fetch(apiURL + 'margs', {
     method: "POST",
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify({
       lat: this.state.latInfo,
       long: this.state.longInfo,
       name: this.state.nameInfo
     })
   })
 }

 deleteMargPlace(event){
   event.preventDefault()
   const apiURL = 'https://sheltered-harbor-96340.herokuapp.com/'
   return fetch(apiURL + 'margs', {
     method: "DELETE",
     headers: {'content-type': 'application/json'},
     body: JSON.stringify({id: this.state.clickedId})
   })
 }

 MargPlaceDetails() {
   if (this.state.clickedId){
      return fetch(apiURL + 'tacos/' + this.state.clickedId)
      .then(response => response.json())
      .then(response => this.setState({singleMarg: response}))
     }
 }

 latUpdateDetails(event) {
   this.setState({latInfo: event.target.value})
 }

 longUpdateDetails(event) {
   this.setState({longInfo: event.target.value})
 }

 nameUpdateDetails(event) {
   this.setState({nameInfo: event.target.value})
 }

  render() {
    return (
      <div style={{ height: '450px', width: '650px' }}>
        {this.state.updateForm ? <UpdateForm
          clickedId={this.state.clickedId}
          showForms={this.switchForms}
          lat={this.latUpdateDetails.bind(this)}
          long={this.longUpdateDetails.bind(this)}
          name={this.nameUpdateDetails.bind(this)}
          formsState={this.state.showForms}
          updatePlace={this.submitUpdate} />
          : null}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBwW9s9Y_ts7bc-lEzor1gHoe682rHgAIs' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={(event) => this.getIdAndSwitchMargFormStateAndAddDeleteAndGetDetails(event)}
        >
        {this.state.margData.map(margPlace => {
          return <CustomMarker
          lat={margPlace.lat}
          lng={margPlace.long}
          text={margPlace.name}
          key={margPlace.id}
          />
        })}
        </GoogleMapReact>
        <div className='buttons'>
          <Buttons showForms={this.switchForms}
            formsState={this.state.showForms}
            deleteButtonState={this.state.markerClicked}
            lat={this.latUpdateDetails.bind(this)}
            long={this.longUpdateDetails.bind(this)}
            name={this.nameUpdateDetails.bind(this)}
            submit={(event) => this.createMargPlace(event)}
            deletePlace={(event) => this.deleteMargPlace(event)}
            />
        </div>
        <div className='place-details'>
          {this.state.singleMarg
            ? Object.values(this.state.singleMarg).map(margInfo => {
            return <PlaceDetails
              lat={margInfo[0].lat}
              long={margInfo[0].long}
              key={margInfo[0].id}
               />
             })
          : null}
        </div>
      </div>
    );
  }
}

export default MargsMap
