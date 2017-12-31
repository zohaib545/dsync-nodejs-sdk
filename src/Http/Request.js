'use strict'

const HttpRequest = class Request {

    constructor() {
        this.headers = []
    }

    /**
     * 
     * @param {string} key 
     * @param {string} value 
     * 
     * @returns this
     */
    addHeader(key, value) {
        this.headers[key] = value;
        return this;
    }

    /**
     * 
     * @param {*} headers 
     * @returns {this}
     */
    setHeaders(headers) {
        this.headers = headers;
        return this;
    }

    /**
     * @returns {array}
     */
    getHeaders() {
        return this.headers;
    }

    /**
     * @return array
     */
    generateHeaders() {
        headers = []
        this.generateHeaders().forEach((value, key) => {
            headers.push(key + ": " + value);
        });
        return headers;
    }

    /**
     * 
     * @param {*} body 
     * @returns {this}
     */
    setBody(body) {
        this.body = body;
        return this;
    }

    /**
     * @returns {mixed}
     */
    getBody() {
        return this.body;
    }

    /**
     * 
     * @param {*} method 
     * @returns this
     */
    setMethod(method) {
        this.method = method;
        return this;
    }

    /**
     * @returns string
     */
    getMethod() {
        return this.method;
    }

}

module.exports = { HttpRequest }