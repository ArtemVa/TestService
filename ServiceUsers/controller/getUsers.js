const pool = require('../db')
async function getUsers(_, res){
    try{
        const queryText = 'SELECT * FROM users ORDER BY id'
        const result = await pool.query(queryText);
        res.json(result.rows)
    }catch(e){
        console.log(e);
    }
}

module.exports = getUsers;