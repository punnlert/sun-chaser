import React, { useEffect, useState } from 'react'
// @ts-ignore
import Map from './components/Map.jsx'
import TopBar from './components/TopBar.jsx'
import { photo_data } from '../public/photo_data.jsx'

import './App.css'

function App() {
  const [location, setLocation] = useState({latLng: [0, 0]});

  const randomBG = () => {
    const randomIndex = Math.floor(Math.random() * photo_data.length);
    const bgURL = photo_data[randomIndex].url;
    document.body.style.backgroundImage = `url(${bgURL})`;
  }

  useEffect(() => {
    randomBG();
  }, []);
  
  return (
    <div className='appcontainer'>
      <TopBar/>
      <div className="contentcontainer">
        <Map/>
      </div>
    </div>
  )
}

export default App
