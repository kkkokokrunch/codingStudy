const Sequelize = require('sequelize')
const {
    dbName,
    host,
    port,
    user,
    password
} = require('./config').database
const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: true,
    timezone: '+08:00',
    define: {

    }
})
sequelize.sync()
module.exports = {
    sequelize
}