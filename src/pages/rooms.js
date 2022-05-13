import React from 'react';
import { Button, Container, Grid } from '@mui/material';
import { MeetingProvider } from 'amazon-chime-sdk-component-library-react';

const Rooms = () =>{
    
    return(
    <Container>
    <Grid container>
        <Grid item md={4}>
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" color="secondary">join</Button>
        </Grid>
        <Grid item md={4}>
        </Grid>
        <MeetingProvider>
        </MeetingProvider>
    </Grid>
    </Container>
    )
}

export default Rooms;
