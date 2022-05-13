export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "Rooms": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "function": {
        "roomHandler": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "clubroom": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}