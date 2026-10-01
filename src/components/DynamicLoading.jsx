import React from 'react';
import myAnimation from '../Animation/loading.json';
import Lottie from 'lottie-react';
import { Box } from '@mui/material';

const DynamicLoading = () => {
  return (
    <Box
      sx={{
        // Make the container fill the entire screen
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        // Use flexbox to perfectly center the content
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Optional: Add a background to overlay content
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 9999, // Ensure it appears on top of everything
      }}
    >
      <Lottie
        animationData={myAnimation}
        loop={true}
        autoplay={true}
        // Make the animation bigger
        style={{ width: 400, height: 400 }}
      />
    </Box>
  );
};

export default DynamicLoading;