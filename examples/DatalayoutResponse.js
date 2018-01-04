const { Field } = require('./../src/Utils/Generator/Field');
const { Endpoint } = require('./../src/Utils/Generator/Endpoint');
const { Datalayout } = require('./../src/Utils/Generator/Datalayout');

// create a new field object
let field = new Field();

// set field information
field.setPrimaryKey(true)
    .setRequired(true)
    .setTreekey('product.sku')
    .setDescription('A product SKU')
    .setName('sku')
    .setType(Field.TYPE_TEXT);

// create a new endpoint object
let endpoint = new Endpoint();

// set endpoint information and add all fields using the addField method
endpoint.setEntityName('product')
    .setTreekey('product')
    .setEntityToken('source-1-product-b5503a0ae5f3bc01b6a2da68afd33305')
    .setEndpointUrl('/entity/product')
    .addField(field);

// finally create a new datalayout object
let datalayout = new Datalayout();

// add all endpoints using the addEndpoint method and call the generate method
// to create the datalayout array
let dataLayoutArray = datalayout.addEndpoint(endpoint).generate();

let responseObject = {
    status: 200,
    message: 'OK',
    detail: '',
    data: dataLayoutArray
}

// Return response object in http response when using express or something similar to return response
console.log(responseObject);