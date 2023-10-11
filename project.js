import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

function MapComponent({ profiles, selectedProfile, onSelectProfile }) {
  return (
    <Map center={[selectedProfile.latitude, selectedProfile.longitude]} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {profiles.map((profile) => (
        <Marker
          key={profile.id}
          position={[profile.latitude, profile.longitude]}
          onClick={() => onSelectProfile(profile)}
        >
          <Popup>{profile.name}</Popup>
        </Marker>
      ))}
    </Map>
  );
}

export default MapComponent;