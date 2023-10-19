const express = require('express')
const homeHandler = require('../controller/home')
const router = express.Router()

router.get('/', homeHandler)

module.exports = router;
