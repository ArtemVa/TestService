const pool = require('../db')
const axios = require('axios')


async function changeUser(req, res){
    try{
        const {id, name, email, age} = req.body
        if (id){
            const queryText = 'UPDATE users set name = $1, email = $2, age = $3 where id = $4 RETURNING *'
            const values = [name, email, age, id]
            const result = await pool.query(queryText, values);
            await axios.post('http://localhost:3001/history', req.body)
            res.json(result.rows[0])
        } else {
            res.send('Не указан id пользователя!')
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = changeUser;