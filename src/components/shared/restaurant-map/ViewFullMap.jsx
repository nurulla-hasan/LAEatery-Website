const ViewFullMap = () => {
  const searchParams = useSearchParams()

  const lat = parseFloat(searchParams.get("lat") || "23.8103")
  const lng = parseFloat(searchParams.get("lng") || "90.4125")
  const address = searchParams.get("address") || "Dhaka"
  const name = searchParams.get("name") || "Restaurant"

  
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} icon={icon}>
        <Popup>
          <strong>{name}</strong>
          <br />
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
