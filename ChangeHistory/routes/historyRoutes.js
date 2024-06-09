const router = require('express').Router()
const addToHistory = require('../controller/addToHistory');
const getHistory = require('../controller/getHistory')

router.post('/history', addToHistory)
router.get('/history', getHistory)

module.exports = router;