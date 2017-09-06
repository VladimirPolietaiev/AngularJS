(function() {
    "use strict";

    angular.module("todoApp",[])
        .run(runApp)
        .value("model", {
            user: "Vitaliy",
            userPhoto: "images/VZ.jpg"
            // ,
            // items: [
            //     { "action": "Estimate...", "done": false },
            //     { "action": "Create...", "done": false },
            //     { "action": "Edit...", "done": true },
            //     { "action": "Delete...", "done": false }
            // ]
        })
        .controller("Todo", Todo)
        .filter("checkedItems",checkedItems);

    function runApp($http, model) {
        $http
            .get("todo.json")
            .success(function(data) {
                model.items = data;
            });
    }

    function Todo($scope, model) {
        $scope.todo = model;
        $scope.showComplete = true;
        $scope.addNewItem =addNewItem;
        $scope.incompleteCount = incompleteCount;
        $scope.warningLevel = warningLevel;


        function addNewItem(items, newItem) {
            if (newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    done: false
                });newItem.action = "";
            }
        }

        function incompleteCount(items) {
            var count = 0;

            angular.forEach(items,function (item) {
                if (!item.done)count++;
            });
            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? "label-success" : "label-warning";
        }
    }

    //filter
    function checkedItems() {
        return function (items, showComplete) {
            var resArr =[];
            if (angular.isArray(items)){
                angular.forEach(items, function (item) {
                    if (item.done == false || showComplete ===true){
                        resArr.push(item);
                    }
                });
                return resArr;
            }else {
                return items;
            }

        }
    }

})();