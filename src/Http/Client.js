'use strict'

const request = require('request-promise');
const { Response } = require('./Response');
const config = require('./../../config');

let Client = class Client {
    /**
     * Client constructor.
     *
     * @param string baseUrl
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
    * @param Request $request
    *
    * @return Response
    */
    async send(req) {
        if (req.getMethod() == 'POST') {
            let options = {
                url: this.baseUrl,
                headers: req.getHeaders(),
                body: req.getBody()
            };
            let response = await request.post(options);
            let httpResponse = new Response();
            httpResponse.setBody(response);
            return httpResponse;
        }
        else if (req.getMethod() == 'GET') {
            let options = {
                url: this.baseUrl,
                headers: req.getHeaders()
            };
            let response = await request.get(options);
            let httpResponse = new Response();
            httpResponse.setBody(response);
            return httpResponse;
        }
        else if (req.getMethod() == 'DELETE') {
            let options = {
                url: this.baseUrl,
                headers: req.getHeaders()
            };
            let response = await request.delete(options);
            let httpResponse = new Response();
            httpResponse.setBody(response);
            return httpResponse;
        }
        else if (req.getMethod() == 'PUT') {
            let options = {
                url: this.baseUrl,
                headers: req.getHeaders(),
                body: req.getBody()
            };
            let response = await request.put(options);
            let httpResponse = new Response();
            httpResponse.setBody(response);
            return httpResponse;
        }
    }
}

module.exports = { Client }