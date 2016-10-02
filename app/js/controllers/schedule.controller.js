'use strict';

module.exports = function ($http, $stateParams, scheduleService, groupsService) {
    var vm = this;
    vm.groupId = $stateParams.groupId;
    vm.date = $stateParams.dayName + ", " + $stateParams.day + "/" + $stateParams.month + "/" + $stateParams.year;
    vm.sortparam = 'time';
    vm.sortReverse = false;
    vm.groupData;
    vm.foundObj;
    vm.foundDay;
    vm.day = $stateParams.dayName;

    vm.setTableSorting = function (name) {
        vm.sortparam = name;
        vm.sortReverse = !vm.sortReverse;
    }

    vm.checkTableSorting = function (name, sortReverse) {
        if (vm.sortparam === name && vm.sortReverse === sortReverse) {
            return true;
        } else 
            return false;
    }
    var promise = groupsService.getData();

    promise.then(function (data) {
        vm.groupData = $.grep(data.groups, function (e) {
            return e.name == vm.groupId;
        });
    });

    promise = scheduleService.getData();

    promise.then(function (data) {
        var schedule = data;
        vm.foundObj = $.grep(schedule.groupIds, function (e) {
            return e.id == vm.groupId;
        });
        if (!vm.foundObj.length) return;

        vm.foundDay = $.grep(vm.foundObj[0].days, function (e) {
            return e.date == $stateParams.dayName;
        });
    });
}