import React from 'react'
import './LocationDisplay.css'; 

const formatPosition = (lngPosition) => {
  const degrees = Math.floor(Math.abs(lngPosition));
  const minutes = Math.floor((Math.abs(lngPosition) - degrees) * 60);
  const seconds = ((Math.abs(lngPosition) - degrees - minutes / 60) * 3600).toFixed(2);
  const direction = lngPosition >= 0 ? 'E' : 'W';
  return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
};

const LocationDisplay = ({ currentLocation, lngPosition }) => {
  const formattedLngPosition = formatPosition(lngPosition);
  const formattedCurrPosition = formatPosition(currentLocation);


  return (
    <div className="currLocation-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none" className='icon-map'>       
        <path d="M11.1352 0.231168L0.573191 5.21597C0.223249 5.38112 0 5.73335 0 6.12031V27.5167C0 28.2259 0.717629 28.7097 1.37501 28.4438L11.1943 24.4715C11.4674 24.3611 11.7754 24.3766 12.0359 24.5141L19.9778 28.7047C20.3196 28.885 20.7347 28.8523 21.044 28.6206L30.5996 21.4621C30.8516 21.2733 31 20.9768 31 20.6618V1.65355C31 0.901701 30.2014 0.418763 29.5356 0.767932L21.0415 5.22219C20.729 5.38605 20.3533 5.37311 20.0529 5.18815L12.0862 0.28393C11.7985 0.1068 11.4408 0.0869531 11.1352 0.231168Z" fill="white"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 20 32" fill="none" className='icon-pivot'>
        <path d="M20 10.0571C20 15.6115 10 32 10 32C10 32 0 15.6115 0 10.0571C0 4.50274 4.47715 0 10 0C15.5228 0 20 4.50274 20 10.0571Z" fill="white"/>
      </svg>
      <h1 className="lngPosition-text">{formattedLngPosition}</h1>
      <h1 className="currLocation-text">{formattedCurrPosition}</h1>
    </div>
  );
};

export default LocationDisplay
