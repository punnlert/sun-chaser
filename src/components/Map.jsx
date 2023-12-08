import React, { Component } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMerc } from '@react-jvectormap/world'
import './Map.css'

import { photo_data } from '../../public/photo_data'
// @ts-ignore
import { Thumbnail } from './Thumbnail.jsx'

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            xPosition: 92,
            lngPosition: -168,
            play: true
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);


        this.markers =  photo_data.map((item) => {
                        const markerItem = {latLng: [item.latitude, item.longitude], 
                                            name: item.title ? item.title : 'Untitled', 
                                            imgsrc: `/thumbnail/${item.id}_thumb.jpg`, 
                                            ID: item.id,
                                            URL: item.url};
                        return markerItem;
                        });
    }

    handleKeyDown(event){
        if (event.key == ' '){
            this.state.play = !this.state.play;
        }
    }

    handleMarkerClick(event, index){
        console.log(event);
        const photoURL = this.markers[index].URL;
        const photoTitle = this.markers[index].name;

        this.props.setbgtitle(photoTitle);
        this.props.setbgurl(photoURL);
        document.body.style.backgroundImage = `url(${photoURL})`;
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown, true);

        this.timeId = setInterval  (() => {
            if (this.state.play) {
                this.setState({ xPosition: this.state.xPosition > 0 ? this.state.xPosition - 0.001 : 92 });
                this.setState({ lngPosition: this.state.lngPosition > -180 ? this.state.lngPosition - 360*0.001/92 : 180 })
                // to-do later setcurrent bar lng
                // this.props.setlng(this.state.lngPosition);
                this.thumbnailleft = photo_data.filter((item, index) => {
                    const long = parseFloat(item.longitude);
                    const id = parseInt(item.id);
                    const isInBound = Boolean(((long > this.state.lngPosition - 6) && (long < this.state.lngPosition) && (id % 2 != 0)));
                    // for debug
                    // if (isInBound) {console.log(item.id);}
                    return isInBound;
                }).filter((item, index) => {return index < 6})
                .map((item, index) => {return <Thumbnail key={index} id={item.id} position='left' setbgtitle={this.props.setbgtitle} setbgurl={this.props.setbgurl}/>});

                this.thumbnailright = photo_data.filter((item, index) => {
                    const long = parseFloat(item.longitude);
                    const id = parseInt(item.id);
                    const isInBound = Boolean(((long > this.state.lngPosition) && (long < this.state.lngPosition + 6) && (id % 2 == 0)));
                    // for debug
                    // if (isInBound) {console.log(item.id);}
                    return isInBound;
                }).filter((item, index) => {return index < 6})
                .map((item, index) => {return <Thumbnail key={index} id={item.id} position='right' setbgtitle={this.props.setbgtitle} setbgurl={this.props.setbgurl}/>});
            }
        }, 1);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <>
                <div className='mapandpointercontainer'>
                    <div className='mapcontainer'>
                        <VectorMap 
                        map={worldMerc} 
                        zoomOnScroll={false} 
                        backgroundColor='rgba(0, 0, 0, 0)' 
                        markerStyle={ { initial: { fill: 'rgba(255, 57, 57, 0.2)', stroke: 'rgba(0, 0, 0, 0)'} } }
                        // @ts-ignore
                        markers={ this.markers }
                        // @ts-ignore
                        zoomButtons={false}
                        onRegionTipShow={(e, label, code) => {e.preventDefault()}}
                        onMarkerTipShow={(e, label, code) => {e.preventDefault()}}
                        onMarkerClick={this.handleMarkerClick}
                        />
                    </div>
                    <div className='pointercontainer' style={{transform: `translateX(${this.state.xPosition - 15}vh)`}}>
                        <div className="thumbnailcontainer">
                            {this.thumbnailleft}
                        </div>
                        <div className='pointer'></div>
                        <div className="thumbnailcontainer">
                            {this.thumbnailright}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Map
