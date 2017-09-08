(function () {
    "use strict";

    angular.module("feature")
        .directive("highlight", highlight);

    function highlight($filter) {
        var  dayFilter = $filter("dayName");
       return function (scope, element, attrs) {
           if(dayFilter(scope.day) === attrs["highlight"]){
               element.css("color", "red");
           }
       }
    }

})();