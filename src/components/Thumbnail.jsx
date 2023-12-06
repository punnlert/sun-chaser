import React from 'react'
import './Thumbnail.css'

export const Thumbnail = ({ id, position }) => {
  return (
    <div className={`thumbnail${position}`}>
        <img src={`/thumbnail/${id}_thumb.jpg`} />
    </div>
  )
}
