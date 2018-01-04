const Endpoint = class Endpoint {
    constructor() {
        this.entityName = null;
        this.treekey = null;
        this.endpointUrl = null;
        this.entityToken = null;
        this.fields = [];
    }

    /**
     * 
     * @param {*} entityName 
     * @return this
     */
    setEntityName(entityName) {
        this.entityName = entityName;
        return this;
    }

    /**
     * 
     * @param {*} treekey 
     * @return this
     */
    setTreekey(treekey){
        this.treekey = treekey;
        return this;
    }

    /**
     * 
     * @param {*} entityToken 
     * @return this
     */
    setEntityToken(entityToken) {
        this.entityToken = entityToken;
        return this;
    }

    /**
     * 
     * @param {*} endpointUrl 
     * @return this
     */
    setEndpointUrl(endpointUrl){
        this.endpointUrl = endpointUrl;
        return this;
    }

    /**
     * 
     * @param {Field} field 
     * @return this
     */
    addField(field) {
        this.fields.push(field);
    }

    /**
     * 
     * @param {*} fields 
     * @return this
     */
    addFields(fields) {
        fields.forEach(field => {
            this.fields.push(field)
        });
        return this;
    }

    generate() {
        this.validate();
        let fields = [];
        this.fields.forEach(field => {
            fields.push(field.generate());
        });

        return {
            'entity_name': this.entityName,
            'treekey': this.treekey,
            'endpoint_url': this.endpointUrl,
            'entity_token': this.entityToken,
            'fields': fields
        };
    }

    validate() {
        let error = null;
        if (!this.treekey) {
            error += 'Treekey is required for this endpoint. ';
        }

        if (!this.entityName) {
            error += "Entity name is required. ";
        }

        if (!this.endpointUrl) {
            error += "The endpoint url is required. ";
        }

        if (!this.entityToken) {
            error += "The Entity Token is required. ";
        }

        if (error) {
            throw new Error(error);
        }
    }
}

module.exports = { Endpoint }