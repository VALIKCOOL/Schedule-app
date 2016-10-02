'use strict';

var app = require('angular').module("scheduleApp");

app.controller("groupsController", ['$http', '$state', 'groupsService', 'scheduleService', require('./groups.controller')]);
app.controller("scheduleController", ['$http', '$stateParams', 'scheduleService', 'groupsService', require('./schedule.controller')]);