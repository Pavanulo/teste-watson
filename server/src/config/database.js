require('dotenv').config({path: __dirname + '/.env'})

module.exports = {
    dialect: 'mysql',
    host: process.env.DBHOST,
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: 'teste-watson',
    define: {
        timestamp: true,
        undercored: true,
    },
}