var express = require('express');

var router = express.Router();


router.route('/')
    .get(function(req, res) {
        res.render('home/index.html', {message: "Welcome NodeJs Application Structure"});
    });



    module.exports = router;