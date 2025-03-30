import './App.css';
import React from 'react'
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { TextField, Box, InputAdornment, styled } from '@mui/material';
import { Search, Face as FaceIcon } from '@mui/icons-material';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NewUser from './NewUser';


const containerStyle = {
  width: '100%',
  height: '100vh',
}

const center = {
  lat: 38.91115,
  lng: -77.02963,
}

const locations = [
  { "lat": 38.916790318076124, "lng": -77.02539741580853, "name": "African American Civil War Museum", "tags": ["community", "african american"] },
  { "lat": 38.899451190407156, "lng": -77.02125193357773, "name": "Chinatown Community Cultural Center", "tags": ["community", "chinese"] },
  { "lat": 38.9907, "lng": -77.0261, "name": "Little Ethiopia", "tags": ["community", "ethiopian"] },
  { "lat": 38.7869, "lng": -77.0143, "name": "Grace's Mandarin", "tags": ["restaurant", "asian"] },
  { "lat": 38.8561, "lng": -77.3224, "name": "Biryani Pointe", "tags": ["restaurant", "indian"] },
  { "lat": 39.2965, "lng": -76.6163, "name": "The Walters Art Museum", "tags": ["community", "art"] },
  { "lat": 38.9072, "lng": -77.0369, "name": "Smithsonian National Museum of African Art", "tags": ["community", "african"] },
  { "lat": 38.8913, "lng": -77.0261, "name": "National Museum of the American Indian", "tags": ["community", "native american"] },
  { "lat": 38.8887, "lng": -77.0199, "name": "Freer Gallery of Art", "tags": ["community", "asian"] },
  { "lat": 38.9236, "lng": -77.0431, "name": "Embassy Row", "tags": ["community", "international"] },
  { "lat": 38.9166, "lng": -77.0323, "name": "The Phillips Collection", "tags": ["community", "art"] },
  { "lat": 38.9121, "lng": -77.0281, "name": "Mexican Cultural Institute", "tags": ["community", "mexican"] },
  { "lat": 38.9318, "lng": -77.0336, "name": "Howard Theatre", "tags": ["music", "african american"] },
  { "lat": 38.9477, "lng": -77.0756, "name": "Glen Echo Park", "tags": ["community", "art"] },
  { "lat": 38.8921, "lng": -77.0231, "name": "Smithsonian Asian Art Museum", "tags": ["community", "asian"] },
  { "lat": 38.9055, "lng": -77.0626, "name": "Duke Ellington School of the Arts", "tags": ["music", "african american"] },
  { "lat": 38.9783, "lng": -76.4922, "name": "Annapolis Maritime Museum", "tags": ["community", "maritime"] },
  { "lat": 38.8165, "lng": -77.0417, "name": "The Torpedo Factory Art Center", "tags": ["community", "art"] },
  { "lat": 38.8813, "lng": -77.1043, "name": "Signature Theatre", "tags": ["music", "theatre"] },
  { "lat": 38.8005, "lng": -77.0469, "name": "The Birchmere", "tags": ["music", "live music"] },
  { "lat": 39.4143, "lng": -77.4105, "name": "National Museum of Civil War Medicine", "tags": ["community", "history"] },
  { "lat": 38.8973, "lng": -77.0199, "name": "National Portrait Gallery", "tags": ["community", "art"] },
  { "lat": 38.8867, "lng": -76.9985, "name": "Anacostia Community Museum", "tags": ["community", "african american"] },
  { "lat": 38.9217, "lng": -77.0255, "name": "Lincoln Theatre", "tags": ["music", "african american"] },
  { "lat": 38.8863, "lng": -77.0021, "name": "Arena Stage", "tags": ["music", "theatre"] },
  { "lat": 38.8956, "lng": -76.9378, "name": "Prince George's African American Museum", "tags": ["community", "african american"] },
  { "lat": 39.0458, "lng": -77.1194, "name": "Glenstone Museum", "tags": ["community", "art"] },
  { "lat": 38.9125, "lng": -77.0445, "name": "House of Sweden", "tags": ["community", "swedish"] },
  { "lat": 38.9822, "lng": -77.0960, "name": "Strathmore Music Center", "tags": ["music", "performing arts"] },
  { "lat": 38.8977, "lng": -77.0260, "name": "Ford's Theatre", "tags": ["music", "theatre"] },
  { "lat": 39.0481, "lng": -76.8575, "name": "Montpelier Arts Center", "tags": ["community", "art"] },
  { "lat": 38.8776, "lng": -77.0091, "name": "The Wharf DC", "tags": ["community", "waterfront"] },
  { "lat": 38.8833, "lng": -76.9958, "name": "Honfleur Gallery", "tags": ["community", "art"] },
  { "lat": 39.2883, "lng": -76.6171, "name": "Reginald F. Lewis Museum", "tags": ["community", "african american"] },
  { "lat": 38.9517, "lng": -77.3464, "name": "Wolf Trap National Park for the Performing Arts", "tags": ["music", "performing arts"] },
  { "lat": 38.8063, "lng": -77.0436, "name": "Carlyle House Historic Park", "tags": ["community", "history"] }
]

const tags = [
  "community",
  "african american",
  "chinese",
  "ethiopian",
  "restaurant",
  "asian",
  "indian",
  "art",
  "african",
  "native american",
  "international",
  "mexican",
  "music",
  "maritime",
  "theatre",
  "live music",
  "history",
  "swedish",
  "performing arts",
  "waterfront"
]

function App() {
  const position = { lat: 38.91115, lng: -77.02963 };

  const StyledTextField = styled(TextField)({
    '& .MuiFilledInput-root': {
      backgroundColor: 'white',
      borderRadius: '50px',
      border: 'none',
      '&::before': { border: 'none' },
      '&::after': { border: 'none' },
      '&:before': { border: 'none' },
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      outline: 'none',
      '&:hover': {
        backgroundColor: 'white',
      },
      '&.Mui-focused': { 
        backgroundColor: 'white', 
      }
    },
  });

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/login" element={<NewUser />} />
  //       <Route path="/*" element={<APIProvider apiKey={''}>
  //                                   <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
  //                                     <Box sx={{
  //                                       position: 'absolute',
  //                                       top: '20px',
  //                                       left: '50%',
  //                                       transform: 'translateX(-50%)',
  //                                       zIndex: 10,
  //                                       display: 'flex',
  //                                       alignItems: 'center',
  //                                       display: 'flex',
  //                                       justifyContent: 'center',
  //                                       alignItems: 'center',
  //                                       width: '100%'
  //                                     }}>
  //                                       <FaceIcon sx={{ marginRight: '20px', fontSize: '3.5rem', backgroundColor: 'white', borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', }} />
  //                                       <StyledTextField
  //                                         id="filled-basic"
  //                                         label="Search for events, classes, cuisine..."
  //                                         variant="filled"
  //                                         sx={{
  //                                           width: '80%',
  //                                         }}
  //                                         InputProps={{ // Corrected InputProps
  //                                           endAdornment: (
  //                                             <InputAdornment position="end">
  //                                               <Search />
  //                                             </InputAdornment>
  //                                           ),
  //                                         }}
  //                                       />
  //                                     </Box>
  //                                     <Map defaultCenter={center} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100vh' }}>
  //                                     {locations.map((location, index) => (
  //                                       <AdvancedMarker
  //                                       key={index}
  //                                       position={{ lat: location.lat, lng: location.lng }}
  //                                       />
  //                                     ))}
  //                                   </Map>
  //                                   </Box>
  //                                 </APIProvider>} />
  //     </Routes>
  //   </BrowserRouter>
  // );

  return (
    <APIProvider apiKey={process.env.REACT_APP_API_KEY}>
      <Box sx={{ position: 'relative', height: '100vh', width: '100%' }}>
        <Box sx={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        }}>
          <FaceIcon sx={{ marginRight: '20px', fontSize: '3.5rem', backgroundColor: 'white', borderRadius: '50px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', }} />
          <StyledTextField
            id="filled-basic"
            label="Search for events, classes, cuisine..."
            variant="filled"
            sx={{
              width: '80%',
            }}
            InputProps={{ // Corrected InputProps
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Map defaultCenter={center} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100vh' }}>
        {locations.map((location, index) => (
          <AdvancedMarker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          />
        ))}
      </Map>
      </Box>
    </APIProvider>
  );
}

// export default React.memo(App)
export default App;

