'use strict';

var server = require('server');


server.get(
    'Slick',
    function (req, res, next) {
        
       
            res.render('slicktemplate');
        
        next();
    }
);



module.exports = server.exports();
