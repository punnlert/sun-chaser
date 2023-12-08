import React from 'react'
import { photo_data } from '../../public/photo_data'
import './Thumbnail.css'

export const Thumbnail = ({ id, position, setbgtitle }) => {

  const handleClick = (id) => (event) => {
    const photoObj = photo_data.filter((item) => {return item.id == id})[0]
    const photoURL = photoObj.url;
    const photoTitle = photoObj.title;

    setbgtitle(photoTitle);
    document.body.style.backgroundImage = `url(${photoURL})`;
  }

  return (
    <div className={`thumbnail${position}`} onClick={handleClick(id)}>
        <img src={`/thumbnail/${id}_thumb.jpg`} />
    </div>
  )
}
