import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Card, CardContent, Typography, CardActions } from '@mui/material';
import { MeetingProvider , lightTheme} from 'amazon-chime-sdk-component-library-react';
import { Auth } from "aws-amplify";
import SignOut from '../components/signout';
import MeetingForm from '../components/meetingForm';
import Meeting from '../components/meeting';
import { ThemeProvider } from 'styled-components';
import Api from '../utils/api';

const { listRooms } = Api;

const Rooms = () =>{
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [rooms, setRooms] = useState([]);

    const getUserName = async () => {
        try {
            const user = await Auth.currentUserInfo()
            console.log(user)
            const curUserName = user?.attributes?.name || user?.username || '';
            const curUserID = user?.attributes?.userId;
            setUserName(curUserName);
            setUserId(curUserID);
            } catch (e) {
            console.log(e)
            }
    }
    
    useEffect(() => {
        getUserName()
        listRooms().then((data) => setRooms((prev) => data));
    }, [])

    const getRoomCards = () => {
        return rooms.map((curRoom) => {
            return <Card sx={{ minWidth: 275 }} key={curRoom.roomId}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {curRoom.topic || 'Sample Topic'}
              </Typography>
              <Typography variant="h5" component="div">
              {curRoom.title || 'Sample Title'}
              </Typography>
              <Typography variant="body2">
                Room ID: {curRoom.roomId}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Join</Button>
            </CardActions>
          </Card>
        })
    }

    return(
    <Container>
    <Grid container>
        <Grid item md={4}>
            <SignOut />
            {rooms.length ? <>{getRoomCards()}</> : <div>No Rooms</div>}
        </Grid>
        <Grid item md={4}>
        <ThemeProvider theme={lightTheme}>
    <MeetingProvider>
      <MeetingForm />
      <Meeting/>
    </MeetingProvider>
  </ThemeProvider>
        </Grid>
    </Grid>
    </Container>
    )
}

export default Rooms;
