"use strict"

const config = require('./../../config')
const { RealtimeRequestException } = require('./../Exception/RealtimeRequestException')
const { HttpRequest } = require('./../Http/Request')
const { Client } = require('./../Http/Client')

const RealtimeRequest = class RealtimeRequest {

    /**
     * request constructor.
     * 
     * @param string|null $authToken
     * @param string|null $entityToken
     * @param mixed|null $data
     */

    constructor(authToken, entityToken, data) {
        this.authToken = authToken;
        this.entityToken = entityToken;
        this.data = data;
        this.realtimeUrl = config.DEFAULT_URL;
    }

    /**
     * @param string $authToken
     * 
     * @return $this
     */

    setAuthToken(authToken) {
        this.authToken = authToken
        return this;
    }

    /**
     * @return null|string
     */
    getAuthToken() {
        return this.authToken;
    }

    /**
     * @param string $entityToken
     * 
     * @return $this
     */
    setEntityToken(entityToken) {
        this.entityToken = entityToken;
        return this;
    }

    /**
     * @return null|string
     */
    getEntityToken() {
        return this.entityToken;
    }

    /**
    * @param string entityId
    *
    * @return this
    */
    setEntityId(entityId) {
        this.entityId = entityId;
        return this;
    }

    /**
     * @return string
     */
    getEntityId() {
        return this.entityId;
    }

    /**
     * @param array data
     *
     * @return $this
     */
    setData(data) {
        this.data = data;
        return this;
    }

    /**
     * @return mixed|null
     */
    getData() {
        return this.data;
    }

    /**
     * @param string realtimeUrl
     *
     * @return $this
     */
    setRealtimeUrl(realtimeUrl) {
        this.realtimeUrl = realtimeUrl;
        return this
    }

    /**
     * @return string
     */
    getReatimeUrl() {
        return this.realtimeUrl;
    }

    /**
     * @return HttpRequest
     */
    getLastRequest() {
        return this.lastRequest;
    }

    /**
     * @return HttpResponse
     */
    getLastResponse() {
        return this.lastResponse;
    }

    /**
     * @param array|null data
     *
     * @return HttpResponse
     */
    create(data = null) {
        this.init(data);
        return this.makeRequest('POST');
    }

    /**
     * @param array|null data
     *
     * @return HttpResponse
     */
    update(data = null) {
        this.init(data);
        return this.makeRequest('PUT');
    }

    /**
     * @param array|null $data
     *
     * @return HttpResponse
     */
    delete(data = null) {
        this.init(data, true);
        return this.makeRequest('DELETE', true);
    }

    /**
     * @param string method
     * @param bool   deleteAction
     *
     * @return mixed
     * @throws RealtimeRequestException
     */
    async makeRequest(method, deleteAction = false) {
        try {
            this.lastRequest = null;
            this.lastResponse = null;
            let httpRequest = new HttpRequest();

            if (deleteAction) {
                httpRequest.addHeader('Entity-Id', this.getEntityId());
            } else {
                httpRequest.setBody(JSON.stringify(this.getData()));
            }
            httpRequest.addHeader('Content-Type', 'application/json').
                addHeader('Entity-Token', this.getEntityToken())
                .addHeader('Auth-Token', this.getAuthToken())
                .setMethod(method);
            let httpClient = new Client(this.realtimeUrl);

            this.lastRequest = httpRequest;
            let httpResponse = await httpClient.send(httpRequest);
            this.lastResponse = httpResponse;

            //reset data and entity id
            this.data = null;
            this.entityId = null;

            let responseArray = JSON.parse(httpResponse.getBody(), true);
            if (httpResponse.getStatusCode() != 200) {
                let errorMessage = 'There was an error making this realtime request.';
                if (typeof responseArray == Array && (responseArray['message'] != null || responseArray['message'] != undefined)) {
                    errorMessage = responseArray['message'];
                }
                throw new Error(httpResponse.getStatusCode() + ': ' + errorMessage);
            }

            else {
                return responseArray;
            }
        }
        catch (error) {
            throw new RealtimeRequestException(error);
        }
    }

    /**
     * @param array|null data
     * @param bool       deleteAction
     */
    init(data, deleteAction = false) {
        if (data) {
            this.setData(data);
        }

        this.validate(deleteAction);
    }

    /**
    * @throws Exception
    */
    validate(deleteAction) {
        let error = null;
        if (!this.getAuthToken()) {
            error += "Missing authrization token from request. ";
        }
        if (!this.getEntityToken()) {
            error += "Missing entity token from request. ";
        }
        if (deleteAction && !this.getEntityId()) {
            error += "Missing entity ID from request. ";
        }

        if (error) {
            throw new RealtimeRequestException(error);
        }
    }

}

module.exports = { RealtimeRequest }