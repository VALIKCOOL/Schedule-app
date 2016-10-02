'use strict';

var app = require('angular').module("scheduleApp");

app.factory('groupsService', require('./groups.service'));
app.factory('scheduleService', require('./schedule.service'));