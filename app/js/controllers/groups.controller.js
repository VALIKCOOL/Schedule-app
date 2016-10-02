'use strict';

module.exports = function ($http, $state, groupsService, scheduleService) {
    var vm = this;
    vm.groupsList;
    vm.schedule;
    vm.lessonObj = {};
    vm.lessonObj.selected;
    vm.lessons = scheduleService.getLessonsNames();
    vm.groupsDirections = groupsService.getDirections();
    vm.addFormFields;
    vm.lessonCount = 0;
    vm.date = "hah";
    var groupId;
    
    vm.getDate = function(){
        var link = "#/groupSchedule/";
        $state.go('groupSchedule', {dayName: vm.date, groupId: groupId});
    }
    
    groupsService.getData().then(function (data) {
        vm.groupsList = data.groups;
    });
    scheduleService.getData().then(function (data) {
        vm.schedule = data;
    });
    vm.onLessonSelect = function ($item, $model, $label, $event) {
        vm.lessonCount = scheduleService.calculateLesson(groupId, vm.lessonObj.selected, vm.schedule);
    }
    vm.deleteGroup = function ($event) {
        var groupObj = {};
        groupObj.groupId = groupId;
        groupsService.deleteData(groupObj);
    }
    vm.checkDatePicker = function ($event) {
        //console.log("Checking datepicker");
    }
    vm.submitMyForm = function () {
        groupsService.pushData(vm.addFormFields);
    }
    vm.onCollapse = function (id) {
        groupId = id;
        vm.lessonCount = 0;
        vm.lessonObj.selected = undefined;
    }
    vm.datePickerClick = function(date){
        console.log('Calling');
        console.log(date);
        console.log(vm.date);
    }

}