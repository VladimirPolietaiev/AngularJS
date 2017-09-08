(function () {
    "use strict";

    angular.module("app")
        .controller("dayCtrl", dayCtrl);

    function dayCtrl($scope) {
        // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $scope.day = new Date().getDay();
        // $scope.day = dayNames[new Date().getDay()];
        // $scope.tomorrow = dayNames[(new Date().getDay()+1)%7];
    }

})();
