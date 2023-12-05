import React, { Component } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMerc } from '@react-jvectormap/world'
import Pointer from './Pointer'
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
                this.state.position = this.state.position < 69.9995 ? this.state.position + 0.0005 : 0;
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
                        <VectorMap map={worldMerc} zoomOnScroll={false} backgroundColor='rgba(0, 0, 0, 0)' zoomButtons={false}/>
                    </div>
                    <div className='pointercontainer' style={{transform: `translateX(${this.state.position - 15}vw)`}}>
                        <Pointer/>
                    </div>
                </div>
            </>
        )
    }
}

export default Map
