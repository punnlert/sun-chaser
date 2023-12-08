import React, { useEffect, useState } from 'react'
// @ts-ignore
import Map from './components/Map.jsx'
import TopBar from './components/TopBar.jsx'
import { photo_data } from '../public/photo_data.jsx'

import './App.css'

function App() {

  const [bgID, setBgID] = useState("");
  const [bgTitle, setBgTitle] = useState("");

  const changeID = (newID) => {
    setBgID(newID);
  }

  const changeTitle = (newTitle) => {
    setBgTitle(newTitle);
  }

  const randomBG = () => {
    const randomIndex = Math.floor(Math.random() * photo_data.length);
    const bgURL = photo_data[randomIndex].url;
    setBgID(photo_data[randomIndex].id);
    setBgTitle(photo_data[randomIndex].title ? photo_data[randomIndex].title : "untitled");
    document.body.style.backgroundImage = `url(${bgURL})`;
  }

  useEffect(() => {

    randomBG();

    const bgChange = setInterval(() => {
      randomBG();
    }, 100000)

    return function cleanup () {
      clearInterval(bgChange);
    }
  }, []);
  
  return (
    <div className='appcontainer'>
      <TopBar/>
      <div className="contentcontainer">
        <Map setbgid={changeID} setbgtitle={changeTitle}/>
      </div>
      <div className="bgtitlecontainer">
        {bgTitle}
      </div>
    </div>
  )
}

export default App
