const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/testing', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'testing.html'));

})
module.exports = router;