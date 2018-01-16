const { RealtimeRequest } = require('./../src/Endpoint/RealtimeRequest')
const config = require('./../config')

let data = { 'foo': 'bar' }

let request = new RealtimeRequest("your api key", "entity token", data)

request.create().then((result) => {
    //RESULT COMES HERE
    console.log(result)
}).catch((error) => {
    //ERROR HANDLING
    console.log(error)
});