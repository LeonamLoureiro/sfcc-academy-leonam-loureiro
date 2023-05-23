'use strict';
 
var server = require('server');
 
var CatalogMgr = require('dw/catalog/CatalogMgr');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var SystemObjectMgr = require('dw/object/SystemObjectMgr');
 
/**
 * Set search configuration values
 *
 * @param {dw.catalog.ProductSearchModel} apiProductSearch - API search instance
 * @param {Object} params - Provided HTTP query parameters
 * @return {dw.catalog.ProductSearchModel} - API search instance
 */
function setupSearch(apiProductSearch, params) {
    var search = require('*/cartridge/scripts/search/search');
 
    var sortingRule = params.srule ? CatalogMgr.getSortingRule(params.srule) : null;
    var selectedCategory = CatalogMgr.getCategory(params.cgid);
}

var CustomAttributes = require('dw/object/CustomAttributes');
$(".badge").text = CustomAttributes.badge-text-CustomAttributes;