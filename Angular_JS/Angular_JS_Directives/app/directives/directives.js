(function() {
    "use strict";

    angular
        .module("app")
        .directive("unorderedList1", unorderedList1)
        .directive("unorderedList2", unorderedList2)
        .directive("unorderedList3", unorderedList3)
        .directive("unorderedList4", unorderedList4)
        .directive("unorderedList5", unorderedList5)
        .directive("unorderedListAttrs", unorderedListAttrs)

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

    function unorderedList4() {
        return {
            link:function (scope, element, attrs) {
                var data = scope[attrs["unorderedList4"]];
                var propertyName = attrs["listProperty"];

                if(angular.isArray(data)){
                    var listElem = angular.element("<ul>");

                    angular.forEach(data, function (dataItem) {
                        // console.log("Item:" + dataItem[propertyName]);
                        // console.log("Item:" +  scope.$eval(propertyName,dataItem));
                        listElem.append(angular.element("<li>")
                            .text( scope.$eval(propertyName,dataItem)));
                    });
                    element.append(listElem);
                }
            }
        };
    }

    function unorderedList5() {
        return {
            link:function (scope, element, attrs) {
                var data = scope[attrs["unorderedList5"]];
                var propertyName = attrs["listProperty"];

                if(angular.isArray(data)){
                    var listElem = angular.element("<ul>");


                    angular.forEach(data, function (dataItem) {
                        var itemElem = angular.element("<li>");
                        listElem.append(itemElem);

                        var  watcherFn = function(watchScope) {
                            return dataItem;
                        };

                        scope.$watchCollection(watcherFn, function (newVal, oldVal) {
                           itemElem.text(scope.$eval(propertyName, newVal));
                        });


                    });
                    element.append(listElem);
                }
            }
        };
    }

    function unorderedListAttrs() {
        return {
            link:function (scope, element, attrs) {
                attrs.$observe("listProperty" , function (newVal, oldVal) {
                    element.html("");

                    var data = scope[attrs["unorderedListAttrs"]];
                    var propertyName = newVal;

                    if(angular.isArray(data)){
                        var listElem = angular.element("<ul>");


                        angular.forEach(data, function (dataItem) {
                            var itemElem = angular.element("<li>");
                            listElem.append(itemElem);

                            var  watcherFn = function(watchScope) {
                                return dataItem;
                            };

                            scope.$watchCollection(watcherFn, function (newVal, oldVal) {
                                itemElem.text(scope.$eval(propertyName, newVal));
                            });


                        });
                        element.append(listElem);
                    }
                });

            }
        };
    }

})();