import React, { useEffect, useState } from 'react'
// @ts-ignore
import Map from './components/Map.jsx'
import TopBar from './components/TopBar.jsx'
import './App.css'

function App() {
  const [location, setLocation] = useState({latLng: [0, 0]});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({latLng: [lat, lng]})
      })
    } else {
      alert("Geolocation Not Supported")
    }
  })
  
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
