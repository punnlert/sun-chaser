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
            LongitudeDirection: "",
            // todolater set current bar lng
            // userLongitude: "",
            // userLongitudeDirection: ""
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
            // todo later set currentbar long
            //   const lngUser = this.convertDDToDMS(this.props.lngposition);
            //   const lngLetUser = this.props.lngPosition >= 0 ? "E" : "W";

              this.setState({ Latitude: lat });
              this.setState({ Longitude: lng });
              this.setState({ LatitudeDirection: latLet });
              this.setState({ LongitudeDirection: lngLet });
            // todo later set currentbar long
            //   this.setState({ userLongitude: lngUser });
            //   this.setState({ userLongitudeDirection: lngLetUser });
              
            })
          } else {
            alert("Geolocation Not Supported")
          }
    }

    render() {
        return (
        <div className='topbarcontainer'>
            <div className='quotecontainer'>
                We are all same humans, admiring the beautiful sky.
            </div>
            {/* todo later set currentbar long */}
            {/* <div className='locationcontainer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                    <path d="M15 7.54286C15 11.7087 7.5 24 7.5 24C7.5 24 0 11.7087 0 7.54286C0 3.37705 3.35786 0 7.5 0C11.6421 0 15 3.37705 15 7.54286Z" fill="white"/>
                </svg>
                {`${this.state.userLongitude} ${this.state.userLongitudeDirection}`}
            </div> */}
            <div className='locationcontainer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                    <path d="M15 7.54286C15 11.7087 7.5 24 7.5 24C7.5 24 0 11.7087 0 7.54286C0 3.37705 3.35786 0 7.5 0C11.6421 0 15 3.37705 15 7.54286Z" fill="white"/>
                </svg>
                {`${this.state.Longitude} ${this.state.LongitudeDirection}`}
            </div>
        </div>
        )
    }
}

export default TopBar