'use strict'
let request = require('request')
let config = require ('./../../config')

let Client = class Client{
    /**
     * Client constructor.
     *
     * @param string baseUrl
     */
     constructor(baseUrl){
         this.baseUrl = baseUrl;
     }

     /**
     * @param Request $request
     *
     * @return Response
     */
    send(req){
        if(req.getMethod() == 'POST'){
            request.post(config.DEFAULT_URL, req.getBody())
        }
        else if(req.getMethod() == 'GET'){

        }
        else if(req.getMethod() == 'DELETE'){

        }
    }
}