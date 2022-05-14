import { getFormControlUnstyledUtilityClasses } from '@mui/base';
import { API } from 'aws-amplify';

import { createChimeMeeting, getAttendee, endChimeMeeting, getMeeting, joinChimeMeeting } from '../graphql/queries';

async function createRoom(title,topic,host,region,iconUri){
    const data = {
        // roomid is generated
        body : {
            title:title,
            topic:topic,
            host:host,
            region: region,
            iconUri: iconUri
        }
    };
    const apiData =await API.post('clubroom', '/rooms', data);
    console.log({apiData});
    alert('Room Created');

}



async function joinRoom(topic,host, region){
    const data = {
        // roomid is generated
        body : {
            title: title,
            topic: topic,
            host: host,
            region: region,
            iconUri: iconUri
        }
    };
    const apiData =await API.post('clubroom', '/rooms', data);
    console.log({apiData});
    alert('Room Created');

}









// const formstate = { roomID : '', hostName : '', region : 'us-east-1', uri :''};
// export async function joinMeeting(meetingId, name) {
//     const joinInfo: any = await API.graphql(graphqlOperation(joinChimeMeeting, {meetingId: meetingId, name: name}));
//     const joinInfoJson = joinInfo.data.joinChimeMeeting;
//     const joinInfoJsonParse = JSON.parse(joinInfoJson.body);
//     return joinInfoJsonParse;
//   }
  
// meeting id
// title
// host
// attendee_name

// TODO:
//listRooms
//createRoom
//deleteRoom
//joinRoom





