'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    'NewForm',
    server.middleware.https,
    csrfProtection.generateToken,
    consentTracking.consent,
    function (req, res, next) {
        var Resource = require('dw/web/Resource');
        var URLUtils = require('dw/web/URLUtils');

        var shippingForm = server.forms.getForm('form');
        shippingForm.clear();
            res.render('buyerFormRender', {
            title: Resource.msg("label.form.title.shipping", "forms", null),
            shippingForm: shippingForm,
            actionUrl: URLUtils.url("buyerForm-SubmitInformation").toString()
        });
        next();
    }
);

server.post(
   "SubmitInformation",
   server.middleware.https,
   consentTracking.consent,
   csrfProtection.generateToken,
   function(req, res, next) {
       var Resource = require("dw/web/Resource");
       var URLUtils = require("dw/web/URLUtils");
       var trainingForm = server.forms.getForm("fortraining");
       res.render("templates/formresponses", {
           title: Resource.msg("training.form.title.responses", "forms", null),
           trainingForm: trainingForm,
           actionUrl: URLUtils.url("buyerForm-SubmitInformation").toString()
       });

       next();
   }
);

module.exports = server.exports();
