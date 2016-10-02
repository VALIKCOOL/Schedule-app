'use strict'

module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/groupsList');
    $stateProvider
        .state('groupsList', {
            url: '/groupsList',
            templateUrl: '../partials/groupsList.html',
            controller: 'groupsController',
            controllerAs: 'groupsCtrl'
        })
        .state('groupSchedule', {
            url: '/groupSchedule/:dayName/:groupId',
            templateUrl: '../partials/groupSchedule.html',
            controller: 'scheduleController',
            controllerAs: 'scheduleCtrl'
        });
}