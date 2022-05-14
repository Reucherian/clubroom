import React from 'react'

import { Grid, Box } from '@mui/material';
import ClubroomLogo from './clubRoomLogo';
import { spacing } from '@mui/system';

const ClubRoomHeader = (user) => {
    return (
    <Grid container>
        <Grid item md={3}></Grid>
        <Grid item md={6}>
            <Grid container sx={{ paddingTop: 3}}>
                <Grid item md={6}>
                <ClubroomLogo></ClubroomLogo>
                    Clubroom
                </Grid>
                <Grid item md={6}>
                    
                </Grid>
            </Grid>
        </Grid>
        <Grid item md={3}>
        </Grid>
    </Grid>
    )
}

export default ClubRoomHeader;