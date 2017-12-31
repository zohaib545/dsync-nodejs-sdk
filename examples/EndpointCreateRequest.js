const { RealtimeRequest } = require('./../src/Endpoint/RealtimeRequest')
const config = require('./../config')

let data = { 'foo': 'bar' }

let request = new RealtimeRequest("3111cd874e547786e882bcde6aa87d97", "entity token", data)
console.log(request)

try {
    let result = request.create();
    console.log(result);
} catch (error) {
    console.log(error);
}