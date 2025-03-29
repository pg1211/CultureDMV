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

function App() {
  const position = {lat: 38.91115, lng: -77.02963};

  return (
    <APIProvider apiKey=''>
      <Map defaultCenter={position} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100vh' }}>
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

// export default React.memo(App)
export default App;

