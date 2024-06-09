require('dotenv').config();
const port = process.env.PORTDB
const user = process.env.user
const password = process.env.password
const database = process.env.database
const {Pool} = require('pg')

const pool = new Pool({
    user,
    password,
    port,
    database
})

module.exports = pool
