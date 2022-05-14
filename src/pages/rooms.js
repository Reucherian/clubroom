import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { MeetingProvider } from 'amazon-chime-sdk-component-library-react';
import { Auth } from "aws-amplify";
import SignOut from '../components/signout';
import MeetingForm from '../components/meetingForm';
import Meeting from '../components/meeting';

const Rooms = () =>{
    const [curUserName, setUserName] = useState('');

    const getUserName = async () => {
        try {
            const user = await Auth.currentUserInfo()
            console.log(user)
            const userName = user?.attributes?.name || user?.username || '';
            setUserName(userName);
            } catch (e) {
            console.log(e)
            }
    }
    
    useEffect(() => {
        getUserName()
    }, [])

    return(
    <Container>
    <Grid container>
        <Grid item md={4}>
            <SignOut />
        </Grid>
        <Grid item md={4}>
        <Button variant="contained" color="secondary">join</Button>
        </Grid>
        <Grid item md={4}>
        </Grid>
        <MeetingProvider>
            <MeetingForm userName={curUserName}/>
            <Meeting />
        </MeetingProvider>
        <h1>CurUserName: {curUserName}</h1>
    </Grid>
    </Container>
    )
}

export default Rooms;
