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
        .directive("unorderedList12", unorderedList12)
        .directive("scopeDemoFalse", scopeDemoFalse)
        .directive("scopeDemoTrue", scopeDemoTrue)
        .directive("scopeDemoIsolated", scopeDemoIsolated)
        .directive("component", component)
        .directive("decor1", decor1)
        .directive("scopeDemoIsolated1", scopeDemoIsolated1)
        .directive("scopeDemoIsolated2", scopeDemoIsolated2)
        .directive("scopeDemoIsolated3", scopeDemoIsolated3)
        .directive("scopeDemoIsolated4", scopeDemoIsolated4)
        .directive("greeting", greeting)
        .directive("greeting2", greeting2)
        .directive("greeting3", greeting3)
        .directive("greeting4", greeting4)
        .directive("hello", hello)
        .directive("hi", hi)

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

    function unorderedList12() {
        return {
            restrict:"A",
            replace: true,
            templateUrl:function (tElem, tAttrs) {
                return tAttrs["template"] === "table"
                        ? "templates/tableTemplate.html"
                        : "templates/itemTemplate.html"
            },
            link:function (scope, element, attrs) {
                scope.data = scope[attrs["unorderedList12"]];
            }
        };
    }

    function scopeDemoFalse() {
        return {
            restrict:"A",
            scope: false,
            templateUrl:"templates/scopeDemoFalseTemplate.html",
        };
    }

    function scopeDemoTrue() {
        return {
            restrict:"A",
            scope: true,
            templateUrl:"templates/scopeDemoFalseTemplate.html",
        };
    }

    function scopeDemoIsolated() {
        return {
            restrict:"A",
            scope: {},
            templateUrl:"templates/userDataTemplate.html",
        };
    }

    function component() {
        return {
            restrict:"E",
            scope: false,
            link: function (scope) {
                scope.dataSource = "directive";
                console.log("directive");
                console.log("dataSource =" + scope.dataSource);
            }
        };
    }

    function decor1() {
        return {
            restrict:"A",
            scope: false,
            link: function (scope) {
                console.log("decor1");
                console.log("dataSource =" + scope.dataSource);
            }
        };
    }

    function decor2() {
        return {
            restrict:"A",
            scope: false,
            link: function (scope) {
                console.log("decor2");
                console.log("dataSource =" + scope.dataSource);
            }
        };
    }

    function scopeDemoIsolated1() {
        return {
            restrict:"A",
            scope: {
                local:"@prop"
            },
            templateUrl:"templates/scopeBindingsTemplate.html"

        };
    }

    function scopeDemoIsolated2() {
        return {
            restrict:"A",
            scope: {
                local:"=prop"
            },
            templateUrl:"templates/scopeBindingsTemplate.html"

        };
    }

    function scopeDemoIsolated3() {
        return {
            restrict:"A",
            scope: {
                local:"=prop",
                cityFn:"&city"
            },
            templateUrl:"templates/scopeEvalTemplate.html"

        };
    }

    function scopeDemoIsolated4() {
        return {
            restrict:"A",
            scope: {
                prop:"@"
            },
            template:"<p>{{ctrl.prop}} = {{ctrl.result}}</p>",
            controllerAs: "ctrl",
            bindToController: true,
            controller: function () {
                this.result = 111;
            }
        };
    }

    function greeting() {
        return {
            restrict:"E",
            scope: {},
            templateUrl:"templates/greetingTemplate.html",
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert("Hello");
                }
            }
        };
    }

    function greeting2() {
        return {
            restrict:"E",
            scope: {},
            templateUrl:"templates/greetingTemplate.html",
            controller: "Greeting"
        };
    }

    function greeting3() {
        return {
            restrict:"E",
            scope: {},
            templateUrl:"templates/greetingTemplate.html",
            controller: "@",
            name: "ctrl"
        };
    }

    function greeting4() {
        var greetings = [];

        return {
            restrict:"E",
            scope: {},
            templateUrl:"templates/greetingTemplate.html",
            controller: function ($scope) {
                $scope.sayHello = function () {
                    alert(greetings.join());
                };
                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                };
            }
        };
    }

    function hello() {
        return {
            restrict:"A",
            require: "greeting4",
            link: function (scope, element, attrs, controller) {
                controller.addGreeting("Hello");
            }
        };
    }

    function hi() {
        return {
            restrict:"A",
            require: "greeting4",
            link: function (scope, element, attrs, controller) {
                controller.addGreeting("Hi");
            }
        };
    }
})();