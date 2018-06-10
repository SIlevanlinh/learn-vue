var faker = require('faker')
var _ = require('lodash')

module.exports = function () {
    return {
        people: _.times(100, n => {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}