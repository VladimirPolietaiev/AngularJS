(function() {
    "use strict";

    angular
        .module("app")
        .directive("unorderedList1", unorderedList1)
        .directive("unorderedList2", unorderedList2)
        .directive("unorderedList3", unorderedList3)
         ;
    
    
    function unorderedList1() {
        return function (scope, element, attrs) {
          var data = scope.products;
            
            if(angular.isArray(data)){
                angular.forEach(data, function (dataItem) {
                    console.log("Item:" + dataItem.name);
                });
            }
        };
    }

    function unorderedList2() {
        return {
            link:function (scope, element, attrs) {
                     var data = scope.products;

                    if(angular.isArray(data)){
                        angular.forEach(data, function (dataItem) {
                            console.log("Item:" + dataItem.name);
                        });
                    }
                }
        }; 
    }

    function unorderedList3() {
        return {
            link:function (scope, element, attrs) {
                var data = scope[attrs["unorderedList3"]];
                var propertyName = attrs["listProperty"];
                if(angular.isArray(data)){
                    angular.forEach(data, function (dataItem) {
                        // console.log("Item:" + dataItem[propertyName]);
                        console.log("Item:" +  scope.$eval(propertyName,dataItem));
                    });
                }
            }
        };
    }

})();