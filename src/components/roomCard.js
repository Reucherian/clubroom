import React from 'react';
import { Button, Grid, Card, CardContent, Typography, Divider } from '@mui/material';
export default function RoomCard({ curRoom }) {
  return (
    <Grid item xs={3}><Card key={curRoom.roomId}>
      <CardContent>
        <Grid container columns={1}>
          <Grid item xs={1}>
            <Typography variant="h5" component="div">
              {curRoom.title || 'Sample Title'}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {curRoom.topic || 'Sample Topic'}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Divider variant='middle' />
          </Grid>
          <Grid my={1} item xs={1}>
            <Button variant="contained">Join</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </Grid>
  )
}