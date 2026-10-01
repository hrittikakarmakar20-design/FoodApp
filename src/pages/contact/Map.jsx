import { Box } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '25rem'
};

const center = {
  lat: 22.5726, 
  lng: 88.3639  
};

const apiKey = "AIzaSyBXWBOEax7BF_I19jSsJnr1zBiQF2y7gmM"

const Map = () => {
  return (
    <>
    <Box sx={{mb: 5, mt: 5}}>
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} 
      >
        
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
    </Box>
    </>
  )
}

export default Map