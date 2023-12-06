import React, { Component } from 'react'
import { VectorMap } from '@react-jvectormap/core'
import { worldMerc } from '@react-jvectormap/world'
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
                        <VectorMap 
                        map={worldMerc} 
                        zoomOnScroll={false} 
                        backgroundColor='rgba(0, 0, 0, 0)' 
// @ts-ignore
                        zoomButtons={false}/>
                    </div>
                    <div className='pointercontainer' style={{transform: `translateX(${this.state.position - 15}vw)`}}>
                        <div className="thumbnailcontainer">
                            <div className="thumbnailleft">
                                <img src="/thumbnail/50178147563_thumb.jpg" alt="" />
                            </div>
                            <div className="thumbnailleft">
                                <img src="/thumbnail/50178152158_thumb.jpg" alt="" />
                            </div>
                            <div className="thumbnailleft">
                                <img src="/thumbnail/50178155243_thumb.jpg" alt="" />
                            </div>
                        </div>
                        <div className='pointer'></div>
                        <div className="thumbnailcontainer">
                            <div className="thumbnailright">
                                <img src="/thumbnail/50178156788_thumb.jpg" alt="" />
                            </div>
                            <div className="thumbnailright">
                                <img src="/thumbnail/50178686641_thumb.jpg" alt="" />
                            </div>
                            <div className="thumbnailright">
                                <img src="/thumbnail/50178690881_thumb.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Map
