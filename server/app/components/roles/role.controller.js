'use strict';

var fields = ['name', 'valid_from', 'valid_to'];

var Item = require('./role.model');
var Controller = require(global.absPath + '/app/shared/CRUD.controller');
module.exports = Controller(Item, fields);
