import React, { useEffect, useState } from 'react'
// @ts-ignore
import Map from './components/Map.jsx'
import TopBar from './components/TopBar.jsx'
import './App.css'

function App() {
  const [location, setLocation] = useState({latLng: [0, 0]});
  
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
