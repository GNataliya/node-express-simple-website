const express = require('express');
const router = express.Router();

router.get('/men', (req, res) => {
    res.render('men');
});



module.exports = router;
