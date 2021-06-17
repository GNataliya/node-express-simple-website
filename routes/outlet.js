const express = require('express');
const router = express.Router();

router.get('/outlet', (req, res) => {
    res.render('outlet');
});



module.exports = router;
