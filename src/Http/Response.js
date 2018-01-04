const Response = class Response {

    /**
     * 
     * @param {*} statusCode 
     * @return this
     */
    setStatusCode(statusCode) {
        this.statusCode = statusCode;
        return this;
    }

    /**
     * @return string
     */
    getStatusCode() {
        return this.statusCode;
    }

    /**
     * 
     * @param {*} body 
     * @return this
     */
    setBody(body) {
        this.body = body;
        return this;
    }

    /**
     * @return this
     */
    getBody() {
        return this.body;
    }
}

module.exports = { Response }