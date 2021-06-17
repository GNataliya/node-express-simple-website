const express = require('express');
const router = express.Router();

router.get('/kids', (req, res) => {
    res.render('kids');
});



module.exports = router;
