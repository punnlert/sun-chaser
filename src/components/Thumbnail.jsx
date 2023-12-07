import React from 'react'
import { storage } from '../firebase.jsx';
import { getDownloadURL, ref } from 'firebase/storage';
import './Thumbnail.css'

const handleClick = (id) => (event) => {
  document.body.style.backgroundImage = `url(/thumbnail/${id}_thumb.jpg)`;
  // getDownloadURL(ref(storage, `/background/${id}.jpg`)).then((url) => {
  //   console.log(url);
  // })
}

export const Thumbnail = ({ id, position }) => {
  return (
    <div className={`thumbnail${position}`} onClick={handleClick(id)}>
        <img src={`/thumbnail/${id}_thumb.jpg`} />
    </div>
  )
}
