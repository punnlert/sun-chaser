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
            time : new Date(),
            xPosition: 0,
            lngPosition: -168,
            play: true
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);


        this.markers =  photo_data.map((item) => {
                        const markerItem = {latLng: [item.latitude, item.longitude], name: item.title ? item.title : 'None', imgsrc: `/thumbnail/${item.id}_thumb.jpg`};
                        return markerItem;
                        });
    }

    handleKeyDown(event){
        if (event.key == ' '){
            this.state.play = !this.state.play;
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown, true);

        this.timeId = setInterval  (() => {
            this.setState({
                time : new Date()
            });
            if (this.state.play) {
                this.state.xPosition = this.state.xPosition < 91.999 ? this.state.xPosition + 0.001 : 0;
                this.state.lngPosition = this.state.lngPosition < (360*91.999/92)-180 ? this.state.lngPosition + 360*0.001/92 : -180;
                this.thumbnailleft = photo_data.filter((item, index) => {
                    const long = parseFloat(item.longitude);
                    const id = parseInt(item.id);
                    const isInBound = Boolean(((long > this.state.lngPosition - 6) && (long < this.state.lngPosition) && (id % 2 != 0)));
                    // for debug
                    // if (isInBound) {console.log(item.id);}
                    return isInBound;
                }).filter((item, index) => {return index < 6})
                .map((item, index) => {return <Thumbnail key={index} id={item.id} position='left'/>});

                this.thumbnailright = photo_data.filter((item, index) => {
                    const long = parseFloat(item.longitude);
                    const id = parseInt(item.id);
                    const isInBound = Boolean(((long > this.state.lngPosition) && (long < this.state.lngPosition + 6) && (id % 2 == 0)));
                    // for debug
                    // if (isInBound) {console.log(item.id);}
                    return isInBound;
                }).filter((item, index) => {return index < 6})
                .map((item, index) => {return <Thumbnail key={index} id={item.id} position='right'/>});
            }
        }, 1);
    }

    componentWillMount(){
        clearInterval(this.timeId);
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
                        markerStyle={ { initial: { fill: 'rgba(255, 0, 0, 0.4)', stroke: 'rgba(0, 0, 0, 0)'} } }
                        // @ts-ignore
                        markers={ this.markers }
                        // @ts-ignore
                        zoomButtons={false}
                        onRegionTipShow={(e, label, code) => {e.preventDefault()}}
                        // onMarkerTipShow={(e, label, code) => {e.preventDefault()}}
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
