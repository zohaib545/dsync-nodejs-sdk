const Datalayout = class Datalayout {

    constructor() {
        this.endpoints = [];
    }

    /**
     * 
     * @param {Endpoint} endpoint 
     * @return this
     */
    addEndpoint(endpoint) {
        this.endpoints.push(endpoint);
        return this;
    }

    /**
     * 
     * @param {*} endpoints 
     * @return this
     */
    addEndpoints(endpoints) {
        endpoints.forEach(element => {
            this.endpoints.push(element);
        });
        return this;
    }

    generate() {
        let endpoints = [];
        this.endpoints.forEach((endpoint) => {
            endpoints.push(endpoint.generate())
        })

        return {
            'data_layout': endpoints
        }
    }


}

module.exports = { Datalayout }