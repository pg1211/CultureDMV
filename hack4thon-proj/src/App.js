import './App.css';
import React from 'react'
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { TextField, Box, InputAdornment, styled } from '@mui/material';
import { Search } from '@mui/icons-material';

const containerStyle = {
  width: '100%',
  height: '100vh',
}

const center = {
  lat: 38.91115,
  lng: -77.02963,
}

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
    },
  });

  return (
    <APIProvider apiKey='AIzaSyCDAK_4XqjDcRHxv1-HsUQ8whPlcJU7jOw'>
      <Box sx={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <StyledTextField
          id="filled-basic"
          label="Search for events, classes, cuisine..."
          variant="filled"
          sx={{
            width: '80%',
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10,
            display: 'flex',
            left: '50%', 
            transform: 'translateX(-50%)', 
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Map defaultCenter={position} defaultZoom={13} mapId="dmv_map" style={{ width: '100%', height: '100%' }} mapTypeControl={false}>
          <AdvancedMarker position={position} />
        </Map>
      </Box>
    </APIProvider>
  );
}

// export default React.memo(App)
export default App;

