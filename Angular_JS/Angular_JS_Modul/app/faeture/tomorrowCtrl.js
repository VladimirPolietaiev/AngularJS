(function () {
    "use strict";

    angular.module("feature")
        .controller("tomorrowCtrl", tomorrowCtrl);

    function tomorrowCtrl($scope, days) {
        // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // $scope.day = dayNames[new Date().getDay()];
        // $scope.tomorrow = dayNames[(new Date().getDay()+1)%7];
        // $scope.day =(new Date().getDay()+1)%7;
        $scope.day =days.tomorrow;
    }

})();
