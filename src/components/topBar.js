import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar({ RightButton = (<></>) }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={1} color='transparent' position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Clubroom
          </Typography>
          <RightButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
