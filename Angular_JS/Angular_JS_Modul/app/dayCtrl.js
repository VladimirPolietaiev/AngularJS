(function () {
    "use strict";

    angular.module("app")
        .controller("dayCtrl", dayCtrl);

    function dayCtrl($scope) {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $scope.day = dayNames[new Date().getDay()];
    }

})();
