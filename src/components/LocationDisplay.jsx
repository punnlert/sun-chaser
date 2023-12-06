import React from 'react'

const LocationDisplay = ( {currentLocation, lngPosition} ) => {
  return (
    <div>
        <h1>
            {currentLocation}
        </h1>
        <h1>
            {lngPosition}
        </h1>
    </div>
  )
}

export default LocationDisplay