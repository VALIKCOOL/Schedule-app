'use strict';

module.exports = function ($http, $q) {
    return {
        getLessonsNames: function () {
            return ["Databases", "OOP", "UI", "Linear Algebra", "Math", "Testing", "HTML", "CSS", "SASS", "GIT"];
        },
        calculateLesson: function(groupId, lesson, schedule) {
            var foundId = $.grep(schedule.groupIds, function (elem) {
                return elem.id == groupId;
            });
            var counter = 0;
            angular.forEach(foundId[0].days, function (elem) {
                angular.forEach(elem.lessons, function (elem) {
                    if (elem.name == lesson) {
                        counter++;
                    }
                });
            });
            return counter;
        },
        getData: function () {
            var deferred = $q.defer();
            $http.get("/data/getSchedule")
                .success(function (data) {
                    deferred.resolve(data);
                });
            return deferred.promise;
        },
        calculate: function(a, b){
            return a * b;
        }
    }
}