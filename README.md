# <img src="src/assets/logo.svg" width="40"/> &nbsp; Clubroom

Clubroom is a video and audio based social media application. It allows people everywhere to talk, tell stories, develop ideas, deepen friendships and meet interesting people around the world. You can jump in and out of different rooms with different subjects like a free flowing podcast. You can simply listen or choose to throw in your thoughts.

The application was built to showcase the ability to build several microservices with a focus on serverless architecuture using AWS services like Lambda, SQS, SNS, S3, DynamoDB, CloudFront, CloudFormation and Chime. 

The source to the React.js frontend application can be found in the <a href="src">src</a> folder.

To publish the project to your own aws account pre-configure amplify environment variables and run the command

```bash
amplify publish
```

This command will also build the infrastructure on the aws account with the cloudformation template in the amplify project.

Access the figma prototype <a href="https://www.figma.com/proto/jXwknZSvitMu0KW0eO4ql6/Clubroom?node-id=2%3A83&starting-point-node-id=2%3A83&scaling=scale-down">here</a>. 
