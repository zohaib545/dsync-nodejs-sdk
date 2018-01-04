const TYPE_TEXT = 'text';
const TYPE_NUMBER = 'number';
const TYPE_URL = 'url';
const TYPE_EMAIL = 'email';
const TYPE_DATE = 'date';
const TYPE_TIME = 'time';
const TYPE_DATETIME = 'datetime';
const TYPE_BOOLEAN = 'boolean';
const TYPE_OBJECT = 'object';
const TYPE_MATH = 'math';
const TYPE_CUSTOM = 'custom';

const Field = class Field {
    constructor() {
        this.id = null;
        this.treekey = null;
        this.value = null;
        this.type = null;
        this.multiple = false;
        this.dateFormat = null;
        this.required = false;
        this.functions = [];
        this.primaryKey = false;
        this.foreignKey = false;
        this.boolSettings = null;
        this.name = null;
        this.description = null;
    }

    static get TYPE_TEXT(){
        return TYPE_TEXT;
    }

    static get TYPE_NUMBER(){
        return TYPE_NUMBER;
    }

    static get TYPE_URL(){
        return TYPE_URL;
    }

    static get TYPE_EMAIL(){
        return TYPE_EMAIL;
    }

    static get TYPE_DATE(){
        return TYPE_DATE;
    }

    static get TYPE_TIME(){
        return TYPE_TIME;
    }

    static get TYPE_DATETIME(){
        return TYPE_DATETIME;
    }

    static get TYPE_BOOLEAN(){
        return TYPE_BOOLEAN;
    }
    
    static get TYPE_OBJECT(){
        return TYPE_OBJECT;
    }

    static get TYPE_CUSTOM(){
        return TYPE_CUSTOM;
    }

    /**
     * 
     * @param {*} id 
     * @return this
     */
    setid(id) {
        this.id = id;
        return this;
    }

    /**
     * 
     * @param {*} treekey 
     * @return this
     */
    setTreekey(treekey) {
        this.treekey = treekey;
        return this;
    }

    /**
     * 
     * @param {*} value 
     * @return this
     */
    setValue(value) {
        this.value = value;
        return this;
    }

    /**
     * 
     * @param {*} type 
     * @return this
     */
    setType(type) {
        this.type = type;
        return this;
    }

    /**
     * 
     * @param {*} multiple 
     * @return this
     */
    setMultiple(multiple) {
        this.multiple = multiple;
        return this;
    }

    /**
     * 
     * @param {*} dateFormat 
     * @return this
     */
    setDateFormat(dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }

    /**
     * 
     * @param {*} required 
     * @return this
     */
    setRequired(required) {
        this.required = required;
        return this;
    }

    /**
     * 
     * @param {array} functions 
     * @return this
     */
    setFunctions(functions) {
        this.functions = functions;
        return this;
    }

    /**
     * 
     * @param {*} primaryKey 
     * @return this
     */
    setPrimaryKey(primaryKey) {
        this.primaryKey = primaryKey;
        return this;
    }

    /**
     * 
     * @param {*} foreignKey 
     * @return this
     */
    setForeignKey(foreignKey) {
        this.foreignKey = foreignKey;
        return this;
    }

    /**
     * 
     * @param {*} boolSettings 
     * @return this
     */
    setBoolSettings(boolSettings) {
        this.boolSettings = boolSettings;
        return this;
    }

    /**
     * 
     * @param {*} name 
     * @return this
     */
    setName(name) {
        this.name = name;
        return this;
    }

    /**
     * 
     * @param {*} description 
     * @return this
     */
    setDescription(description) {
        this.description = description;
        return this;
    }

    generate() {
        this.validate();

        return {
            'id': this.id,
            'treekey': this.treekey,
            'value': this.value,
            'multiple': this.multiple,
            'date_format': this.dateFormat,
            'required': this.required,
            'functions': this.functions,
            'primary_key': this.primaryKey,
            'foreign_key': this.foreignKey,
            'bool_settings': this.boolSettings,
            'name': this.name,
            'description': this.description
        }
    }

    validate() {
        let error = null;
        if (!this.treekey) {
            error += 'Treekey is required for this field. ';
        }

        if (!this.type) {
            error += 'Field type is required. ';
        }

        if (!this.name) {
            error += 'Name of field is required. ';
        }

        if (error) {
            throw new Error(error);
        }
    }

}

module.exports = { Field }