const express = require('express');
const router = express.Router();

router.get('/women', (req, res) => {
    res.render('women');
});



module.exports = router;
