const axios = require('axios');
const pool = require('../db')

async function addUser(req, res){
    try{
        const {name, email, age} = req.body
        const checkMail = await pool.query('select email from users where email=$1', [email])
        if(!checkMail.rowCount){
            const queryText = 'INSERT INTO users(name, email, age) VALUES($1, $2, $3) RETURNING *'
            const values = [name, email, age]
            const newUser = (await pool.query(queryText, values)).rows[0];
            console.log(newUser);
            await axios.post('http://localhost:3001/history', newUser);
            console.log('the user was successfully added and the data was transferred to http://localhost:3001/history');
            res.send('Пользователь успешно добавлен')
        }
        else{
            res.send('Пользователь с таким email уже существует')
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = addUser;