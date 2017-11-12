
var web = function(app) {
    app.use('/', require('./../src/controller/home-controller'));
}

module.exports = web;