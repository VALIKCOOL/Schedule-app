'use strict';

module.exports = function ($http, $q, $state) {
    var groupDirections = ["Java", ".NET", "Web UI", "ATQC", "AngularJS", "MQC", "UX", "LAMP", "Databases", "iOS"];
    return {
        getDirections: function () {
            return groupDirections;
        },
        getData: function () {
            var deferred = $q.defer();
            $http.get("/data/getGroups").success(function (data) {
                deferred.resolve(data);
            });
            return deferred.promise;
        },
        pushData: function (data) {
            $http.post("/data/addGroup", data).success(function (data) {
                $state.reload();
            });
        },
        deleteData: function (data) {
            $http.post("/data/removeGroup", data).success(function (data) {
                $state.reload();
            });
        }
    }
}