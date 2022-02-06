'use strict';

var server = require('server');

server.get('ShowTemplate', function (req, res, next) {
    
    res.render('rendering');
    next();
});

module.exports = server.exports();
