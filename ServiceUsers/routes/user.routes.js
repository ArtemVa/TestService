const router = require('express').Router()
const addUser = require('../controller/addUser');
const changeUser = require('../controller/changeUser')
const getUsers = require('../controller/getUsers')

router.post('/user/creation', addUser)
router.put('/user/change', changeUser)
router.get('/user/list', getUsers)

module.exports = router;