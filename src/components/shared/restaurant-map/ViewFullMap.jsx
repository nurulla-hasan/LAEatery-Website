"use client"

import dynamic from "next/dynamic"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { icon } from "@/lib/leaflet-icon"

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false })
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false })

const ViewFullMap = () => {
  const searchParams = useSearchParams()

  const [location, setLocation] = useState({
    lat: 23.8103,
    lng: 90.4125,
    address: "Dhaka",
    name: "Restaurant",
  })

  useEffect(() => {
    const lat = parseFloat(searchParams.get("lat") || "23.8103")
    const lng = parseFloat(searchParams.get("lng") || "90.4125")
    const address = searchParams.get("address") || "Dhaka"
    const name = searchParams.get("name") || "Restaurant"

    setLocation({ lat, lng, address, name })
  }, [searchParams])

  return (
    <MapContainer
      center={[location.lat, location.lng]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[location.lat, location.lng]} icon={icon}>
        <Popup>
          <strong>{location.name}</strong>
          <br />
          {location.address}
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default ViewFullMap
