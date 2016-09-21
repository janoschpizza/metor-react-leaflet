import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

class App extends Component {
  constructor () {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    }
  }

  render () {
    const position = [51.505, -0.09]
    return (
      <div id="app-container">
        <Map center={position} zoom={13}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {
            // <Marker position={position}>
            //   <Popup>
            //     <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            //   </Popup>
            // </Marker>
          }
        </Map>
      </div>
    )
  }
}

Meteor.startup(() => {
  render(<App/>, document.getElementById('render-target'));
})
