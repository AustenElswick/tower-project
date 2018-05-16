import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './tacoMap.css'
import UpdateForm from '../updateform/updateForm'
import Buttons from '../buttons/buttons'
import PlaceDetails from '../placedetails/placeDetails'

const CustomMarker = ({ text }) => <div className="taco-marker"><p>{text}</p></div>
let apiURL = 'https://sheltered-harbor-96340.herokuapp.com/'

class TacosMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.752318,
      lng: -104.996735
    },
    zoom: 13
  }

  constructor() {
    super()
    this.state = {
      tacoData: [],
      updateForm: false,
      showForms: false,
      clickedId: null,
      latInfo: null,
      longInfo: null,
      nameInfo: null,
      markerClicked: false,
      singleTaco: []
    }
    this.switchTacoFormState = this.switchTacoFormState.bind(this)
    this.getIdOfClicked = this.getIdOfClicked.bind(this)
    this.switchForms = this.switchForms.bind(this)
    this.deleteButtonSwitch = this.deleteButtonSwitch.bind(this)
    this.TacoPlaceDetails = this.TacoPlaceDetails.bind(this)
  }

  componentDidMount() {
    return fetch(apiURL + 'tacos')
    .then(tacos => tacos.json())
    .then(tacos => {
      this.setState({tacoData: tacos.tacos})
    })
  }

  switchTacoFormState() {
    const updateForm = this.state.updateForm
    this.setState({updateForm: !updateForm})
  }

  getIdOfClicked(event) {
    this.setState({clickedId: event})
  }

  getIdAndSwitchTacoFormStateAndAddDeleteAndGetDetails(event) {
    this.getIdOfClicked(event)
    this.switchTacoFormState()
    this.deleteButtonSwitch()
    this.TacoPlaceDetails(event)
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
   return fetch(apiURL + 'tacos', {
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

 createTacoPlace(event) {
   event.preventDefault()
   return fetch(apiURL + 'tacos', {
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

 deleteTacoPlace(event){
   event.preventDefault()
   const apiURL = 'https://sheltered-harbor-96340.herokuapp.com/'
   return fetch(apiURL + 'tacos', {
     method: "DELETE",
     headers: {'content-type': 'application/json'},
     body: JSON.stringify({id: this.state.clickedId})
   })
 }

 TacoPlaceDetails() {
   if (this.state.clickedId){
      return fetch(apiURL + 'tacos/' + this.state.clickedId)
      .then(response => response.json())
      .then(response => this.setState({singleTaco: response}))
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
          onChildClick={(event) => this.getIdAndSwitchTacoFormStateAndAddDeleteAndGetDetails(event)}
        >
        {this.state.tacoData.map(tacoPlace => {
          return <CustomMarker
          lat={tacoPlace.lat}
          lng={tacoPlace.long}
          text={tacoPlace.name}
          key={tacoPlace.id}
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
            submit={(event) => this.createTacoPlace(event)}
            deletePlace={(event) => this.deleteTacoPlace(event)}
            />
        </div>
        <div className='place-details'>
          {this.state.singleTaco
            ? Object.values(this.state.singleTaco).map(tacoInfo => {
            return <PlaceDetails
              lat={tacoInfo[0].lat}
              long={tacoInfo[0].long}
              key={tacoInfo[0].id}
               />
             })
          : null}
        </div>
      </div>
    );
  }
}

export default TacosMap
