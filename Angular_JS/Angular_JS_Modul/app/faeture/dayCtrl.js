(function () {
    "use strict";

    angular.module("feature")
        .controller("dayCtrl", dayCtrl);

    function dayCtrl($scope, days) {
        // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.day = days.today;
        // $scope.day = new Date().getDay();
        // $scope.day = dayNames[new Date().getDay()];
        // $scope.tomorrow = dayNames[(new Date().getDay()+1)%7];
    }

})();
