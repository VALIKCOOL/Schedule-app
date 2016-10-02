'use strict';
//
//require('es5-shim');
//require('es5-sham');

global.$ = require('jquery');
global.jQuery = require('jquery');

require('../libs/jquery-ui/jquery-ui.min');
require('../libs/bootstrap/bootstrap.min');

var angular = require('angular');

require('../libs/angular-route/angular-route.min');
require('../libs/angular-animate/angular-animate.min');
require('../libs/angular-sanitize/angular-sanitize.min');
require('../libs/angular-ui-router/angular-ui-router.min');
require('../libs/angular-bootstrap/ui-bootstrap-tpls.min');


var app = angular.module('scheduleApp', ['ngAnimate', 'ngSanitize', 'ui.router', 'ui.bootstrap']);

app.constant('VERSION', require('../../package.json').version);

require('./services');
require('./controllers');
require('./directives');

app.config(require("./routes.js"));