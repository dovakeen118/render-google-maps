import React, { useEffect, useRef } from "react"

const MyMapComponent = (props) => {
  const [map, setMap] = useState()
  const ref = useRef(null)

  const boston = { lat: 42.361, lng: -71.057 };

  // useEffect(() => {
  //   new window.google.maps.Map(ref.current, {
  //     center: boston,
  //     zoom: 11,
  //   });
  // });

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center: boston,
        zoom: 11
      }))
    }
  }, [ref, map])

  return (
    <div ref={ref} id="map" />
  )
}

export default MyMapComponent