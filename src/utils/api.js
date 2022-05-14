import { API } from 'aws-amplify';

// TODO: createRoom

export async function createMeeting(roomID , attendeeName, region) {
    const joinInfo = await API.graphql(graphqlOperation(createChimeMeeting, {roomid: title, name: attendeeName, region: region }));
    const joinInfoJson = joinInfo.data.createChimeMeeting;
    const joinInfoJsonParse = JSON.parse(joinInfoJson.body);
    return joinInfoJsonParse;

}


// meeting id

// title
// host

// attendee_name





