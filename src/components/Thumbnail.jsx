import React from 'react'
import './Thumbnail.css'

const handleClick = (id) => (event) => {
  document.body.style.backgroundImage = `url('/thumbnail/${id}_thumb.jpg')`;
  console.log(id);
}

export const Thumbnail = ({ id, position }) => {
  return (
    <div className={`thumbnail${position}`} onClick={handleClick(id)}>
        <img src={`/thumbnail/${id}_thumb.jpg`} />
    </div>
  )
}
