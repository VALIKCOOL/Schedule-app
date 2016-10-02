'use strict';
module.exports = function () {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            elem.datepicker({
                dateFormat: "DD",
                weekStart: 1,
                daysOfWeekDisabled: "0,6",
                daysOfWeekHighlighted: "0,6",
                calendarWeeks: true,
                autoclose: true,
                defaultDate: null,
                firstDay: 1,
                beforeShowYear: function (date) {
                    if (date.getFullYear() == 2007) {
                        return false;
                    }
                },
                beforeShowDay: $.datepicker.noWeekends,

                onSelect: function (dateText) {
                    console.log(dateText);
                    ctrl.$setViewValue(dateText);
                    ctrl.$render();
                    scope.$apply();
//                    
//                    var link = "#/groupSchedule/";
//                    var group = "/" + angular.element(".in .bg-primary .group-name").text();
//
//                    var dateAsString = dateText;
//                    console.log(dateAsString);
//
//                    //                    var dateAsObject = $(this).datepicker('getDate');
//                    //                    console.log(dateAsObject);
//                    angular.element(this).next().children().attr("href", link + dateAsString + group);
//
//                    $("#dateHeader").text(dateText);
                }
            });
        }
    }
}