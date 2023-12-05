import React, { Component } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMill } from '@react-jvectormap/world'
import '../components/Map.css'

class Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            time : new Date(),
            position: 0,
            play: true,
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
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
                this.state.position = this.state.position < 59.9995 ? this.state.position + 0.0005 : 0;
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
                        <VectorMap map={worldMill} zoomOnScroll={false} backgroundColor='rgba(0, 0, 0, 0)' 
// @ts-ignore
                        zoomButtons={false}/>
                    </div>
                    <div className='pointer' style={{transform: `translateX(${this.state.position}vw)`}}></div>
                </div>
            </>
        )
    }
}

export default Map
