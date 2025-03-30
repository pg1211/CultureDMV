import './App.css';
import React from 'react'
import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

const containerStyle = {
  width: '100%',
  height: '100vh',
}

const center = {
  lat: 38.91115,
  lng: -77.02963,
}

const locations = [
  { lat: 38.916790318076124, lng: -77.02539741580853}, // African American Civil War Museum
  { lat: 38.899451190407156, lng: -77.02125193357773}, // Chinatown Community Cultural Center
  { lat: 38.9907, lng: -77.0261 }, // Little Ethiopia
  { lat: 38.7869, lng: -77.0143 }, // Grace's Mandarin
  { lat: 38.8561, lng: -77.3224 }, // Biryani Pointe
  { lat: 39.2965, lng: -76.6163 }, // The Walters Art Museum
  { lat: 38.9072, lng: -77.0369 }, // Smithsonian National Museum of African Art
  { lat: 38.8913, lng: -77.0261 }, // National Museum of the American Indian
  { lat: 38.8887, lng: -77.0199 }, // Freer Gallery of Art
  { lat: 38.9236, lng: -77.0431 }, // Embassy Row
  { lat: 38.9166, lng: -77.0323 }, // The Phillips Collection
  { lat: 38.9121, lng: -77.0281 }, // Mexican Cultural Institute
  { lat: 38.9318, lng: -77.0336 }, // Howard Theatre
  { lat: 38.9477, lng: -77.0756 }, // Glen Echo Park
  { lat: 38.8921, lng: -77.0231 }, // Smithsonian Asian Art Museum
  { lat: 38.9055, lng: -77.0626 }, // Duke Ellington School of the Arts
  { lat: 38.9783, lng: -76.4922 }, // Annapolis Maritime Museum
  { lat: 38.8165, lng: -77.0417 }, // The Torpedo Factory Art Center
  { lat: 38.8813, lng: -77.1043 }, // Signature Theatre
  { lat: 38.8005, lng: -77.0469 }, // The Birchmere
  { lat: 39.4143, lng: -77.4105 }, // National Museum of Civil War Medicine
  { lat: 38.8973, lng: -77.0199 }, // National Portrait Gallery
  { lat: 38.8867, lng: -76.9985 }, // Anacostia Community Museum
  { lat: 38.9217, lng: -77.0255 }, // Lincoln Theatre
  { lat: 38.8863, lng: -77.0021 }, // Arena Stage
  { lat: 38.8956, lng: -76.9378 }, // Prince George's African American Museum
  { lat: 39.0458, lng: -77.1194 }, // Glenstone Museum
  { lat: 38.9125, lng: -77.0445 }, // House of Sweden
  { lat: 38.9822, lng: -77.0960 }, // Strathmore Music Center
  { lat: 38.8977, lng: -77.0260 }, // Ford's Theatre
  { lat: 39.0481, lng: -76.8575 }, // Montpelier Arts Center
  { lat: 38.8776, lng: -77.0091 }, // The Wharf DC
  { lat: 38.8833, lng: -76.9958 }, // Honfleur Gallery
  { lat: 39.2883, lng: -76.6171 }, // Reginald F. Lewis Museum
  { lat: 38.9517, lng: -77.3464 }, // Wolf Trap National Park for the Performing Arts
  { lat: 38.8063, lng: -77.0436 }, // Carlyle House Historic Park
];

function App() {
  const position = {lat: 38.91115, lng: -77.02963};

  return (
    <APIProvider apiKey=''>
      <Map defaultCenter={center} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100vh' }}>
        {locations.map((location) => (
          <AdvancedMarker key={location} position={location} />
        ))}
      </Map>
    </APIProvider>
  );
}

// export default React.memo(App)
export default App;

