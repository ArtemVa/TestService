const pool = require('../../ServiceUsers/db')

async function addToHistory(req, res){
    const {id, ...info} = req.body;
    const values = [id, JSON.stringify(info)];
    console.log(id, info);
    await pool.query('INSERT INTO history(id, "changedData") VALUES($1, $2) RETURNING *', values)
    console.log('Received data:', req.body);
    res.send('Data received successfully');
}

module.exports = addToHistory;