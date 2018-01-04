const { RealtimeRequest } = require('./../src/Endpoint/RealtimeRequest');

let request = new RealtimeRequest('yourAuthToken', 'yourEndpointToken');

request.setEntityId('primaryKeyAsDefinedInDatalayout');


request.delete().then((result) => {
    //RESULT COMES HERE
    console.log(result)
}).catch((error) => {
    //ERROR HANDLING
    console.log(error)
});