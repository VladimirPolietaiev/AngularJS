(function () {
    "use strict";

    angular.module("app")
        .controller("tomorrowCtrl", tomorrowCtrl);

    function tomorrowCtrl($scope) {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        // $scope.day = dayNames[new Date().getDay()];
        $scope.tomorrow = dayNames[(new Date().getDay()+1)%7];
    }

})();
