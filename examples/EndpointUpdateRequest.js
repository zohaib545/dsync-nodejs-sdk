const { RealtimeRequest } = require('./../src/Endpoint/RealtimeRequest');

let data = { foo: foo };

let request = new RealtimeRequest();

request.setAuthToken('yourAuthToken')
    .setEntityToken('yourEndpointToken')
    .setData(data);

request.update().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});