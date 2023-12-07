import React from 'react'
import { photo_data } from '../../public/photo_data'
import './Thumbnail.css'

const handleClick = (id) => (event) => {
  const photoURL = photo_data.filter((item) => {return item.id == id})[0].url;
  document.body.style.backgroundImage = `url(${photoURL})`;
}

export const Thumbnail = ({ id, position }) => {
  return (
    <div className={`thumbnail${position}`} onClick={handleClick(id)}>
        <img src={`/thumbnail/${id}_thumb.jpg`} />
    </div>
  )
}
