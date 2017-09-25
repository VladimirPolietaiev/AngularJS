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
        .directive("unorderedListScope", unorderedListScope)
        .directive("unorderedList6", unorderedList6)
        .directive("unorderedList7", unorderedList7)
        .directive("unorderedList8", unorderedList8)
        .directive("unorderedList9", unorderedList9)
        .directive("unorderedList10", unorderedList10)
        .directive("unorderedList11", unorderedList11)
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

    function unorderedListScope() {
        return {
            scope:{
                unorderedListScope:"=",
                listProperty:"="
            },
            link:function (scope, element, attrs) {
                scope.$watch("listProperty" , function (newVal, oldVal) {
                    element.html("");

                    var data = scope.unorderedListScope;
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

    function unorderedList6() {
        return {
            restrict:"EACM",

            link:function (scope, element, attrs) {
                var data = scope[attrs["unorderedList6"] || attrs["listSource"]];
                var propertyName = attrs["listProperty"] || "price | currency";

                if(angular.isArray(data)){
                    var listElem = angular.element("<ul>");


                    angular.forEach(data, function (dataItem) {
                        var itemElem = angular.element("<li>").text(scope.$eval(propertyName, dataItem));
                        listElem.append(itemElem);

                    });
                    if(element[0].nodeName === "#comment"){
                        element.parent().append(listElem);
                    }
                    else {
                        element.append(listElem);
                    }
                }
            }
        };
    }

    function unorderedList7() {
        return {
            restrict:"A",

            link:function (scope, element, attrs) {
                var markup ="<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>";
                scope.data = scope[attrs["unorderedList7"]];
                element.html(markup);
            }
        };
    }

    function unorderedList8($compile) {
        return {
            restrict:"A",

            link:function (scope, element, attrs) {
                var markup ="<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>";
                scope.data = scope[attrs["unorderedList8"]];
                element.append($compile(markup)(scope));
            }
        };
    }

    function unorderedList9() {
        return {
            restrict:"A",
            template:"<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>",
            link:function (scope, element, attrs) {
                scope.data = scope[attrs["unorderedList9"]];
            }
        };
    }

    function unorderedList10() {
        return {
            restrict:"A",
            template:function (tElem, tAttrs) {
                return angular.element( document.querySelector("#listTemplate")).html();
            },
            link:function (scope, element, attrs) {
                scope.data = scope[attrs["unorderedList10"]];
            }
        };
    }

    function unorderedList11() {
        return {
            restrict:"A",
            templateUrl:"templates/tableTemplate.html",
            link:function (scope, element, attrs) {
                scope.data = scope[attrs["unorderedList11"]];
            }
        };
    }

})();