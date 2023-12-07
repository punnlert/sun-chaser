import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "./TopBar.css"

export class TopBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            Latitude: "",
            Longitude: "",
            LatitudeDirection: "",
            LongitudeDirection: ""
        }
        this.convertDDToDMS = this.convertDDToDMS.bind(this);
    }

    convertDDToDMS(D){
        return [0|D, '° ', 0|(D=(D<0?-D:D)+1e-4)%1*60, "' ", 0|D*60%1*60, '"'].join('');
    }

    componentDidMount(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              const lat = this.convertDDToDMS(position.coords.latitude);
              const lng = this.convertDDToDMS(position.coords.longitude);
              const latLet = position.coords.latitude >= 0 ? "N" : "S";
              const lngLet = position.coords.longitude >= 0 ? "E" : "W";

              this.setState({ Latitude: lat });
              this.setState({ Longitude: lng });
              this.setState({ LatitudeDirection: latLet });
              this.setState({ LongitudeDirection: lngLet });
            })
          } else {
            alert("Geolocation Not Supported")
          }
    }

    render() {
        return (
        <div className='topbarcontainer'>
            <div className='musiccontainer'>
                Music
            </div>
            <div className='locationcontainer'>
                {`${this.state.Latitude} ${this.state.LatitudeDirection} ${this.state.Longitude} ${this.state.LongitudeDirection}`}
            </div>
        </div>
        )
    }
}

export default TopBar