const md5 = require('md5');

const EntityToken = class EntityToken {
    /**
     * 
     * @param {*} entityName 
     * @return string
     */
    generateEntityToken(entityName) {
        return entityName.split(' ').join('').toLowerCase() + '-' + md5(Date());
    }
}

module.exports = { EntityToken }