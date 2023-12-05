import React, { Component } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import '../components/Map.css'

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            time : new Date(),
            position: 0
        };
    }

    componentDidMount(){
        this.timeId = setInterval(() => {
            this.setState({
                time : new Date()
            });
            this.state.position = this.state.position < 59.999 ? this.state.position + 0.001 : 0;
        }, 1);
    }

    componentWillMount(){
        clearInterval(this.timeId);
    }

    render() {
        return (
            <>
                <div className='mapandpointercontainer'>
                    <div className='mapcontainer'>
                        <VectorMap map={worldMill} zoomOnScroll={false} backgroundColor='rgba(0, 0, 0, 0)'/>
                    </div>
                    <div className='pointer' style={{transform: `translateX(${this.state.position}vw)`}}></div>
                </div>
            </>
        )
    }
}

export default Map
