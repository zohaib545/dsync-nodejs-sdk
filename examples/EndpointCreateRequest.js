const { RealtimeRequest } = require('./../src/Endpoint/RealtimeRequest')
const config = require('./../config')

let data = { 'foo': 'bar' }

let request = new RealtimeRequest("3111cd874e547786e882bcde6aa87d97", "entity token", data)

request.create().then((result) => {
    //RESULT COMES HERE
    console.log(result)
}).catch((error) => {
    //ERROR HANDLING
    console.log(error)
});