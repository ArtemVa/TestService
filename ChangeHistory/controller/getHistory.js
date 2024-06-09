const pool = require('../../ServiceUsers/db')

async function getHistory(req, res){
    const paramsLength = Object.keys(req.query).length
    if(paramsLength===2){
        const limit = 5; 
        const {page, id} = req.query;
        const offset = (page-1)*limit;
        const result = await pool.query('select * from history where id = $1 limit $2 offset $3', [id, limit, offset]);
        if(!!result){
            res.send('Данных больше нет')
        }else{
            res.send(result.rows)
        }
    } else{
        res.send('Упс... Введены не все параметры запроса!')
    }
}

module.exports = getHistory;