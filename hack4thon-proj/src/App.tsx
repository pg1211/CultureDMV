import './App.css';

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';

function App() {
  const position = {lat: 38.91115, lng: -77.02963};

  return (
    <APIProvider apiKey='AIzaSyCOow_U3fskeHmVl-nxfHl8lniBjOlOIXM'>
      <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID" style={{ width: '100%', height: '100%' }}>
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default App;

// function App() {
//   const position = {lat: 38.91115, lng: -77.02963};

//   return (
//     <APIProvider apiKey={'AIzaSyCOow_U3fskeHmVl-nxfHl8lniBjOlOIXM'}>
//       <Map defaultCenter={position} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100vh' }}>
//         <AdvancedMarker position={position} />
//       </Map>
//     </APIProvider>
//   );
// }

// export default App;

