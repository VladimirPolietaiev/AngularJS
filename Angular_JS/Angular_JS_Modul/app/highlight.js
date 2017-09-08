(function () {
    "use strict";

    angular.module("app")
        .directive("highlight", highlight);

    function highlight() {
       return function (scope, element, attrs) {
           if(scope.day === attrs["highlight"]){
               element.css("color", "red");
           }
       }
    }

})();