import React, { useContext } from "react"
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api"

const Map = ({ coord }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  })

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="info-div">
        <i className="fa-solid fa-map mr-1"></i>
        <p className="ml-1">Map</p>
      </div>
      <div className="w-full h-[calc(100%-25px)]">
        {!isLoaded ? (
          <div>Loading</div>
        ) : (
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "8px",
            }}
            zoom={10}
            center={{ lat: coord.lat, lng: coord.lng }}
          />
        )}
      </div>
    </div>
  )
}

export default Map
