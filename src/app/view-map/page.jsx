"use client"
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { icon } from "@/lib/leaflet-icon";

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const FullMapPage = () => {
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat")) || 23.8103;
  const lng = parseFloat(searchParams.get("lng")) || 90.4125;
  const address = searchParams.get("address") || "Dhaka";
  const name = searchParams.get("name") || "Restaurant";

  return (
    <div className="w-full h-screen">
      <MapContainer center={[lat, lng]} zoom={15} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={icon}>
          <Popup>
            <strong>{name}</strong><br />{address}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default FullMapPage;
