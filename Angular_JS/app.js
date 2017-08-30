(function() {
    "use strict";

    angular.module("todoApp",[])
        .value("model", {
            user: "Vitaliy",
            userPhoto: "images/VZ.jpg",
            items: [
                { "action": "Estimate...", "done": false },
                { "action": "Create...", "done": false },
                { "action": "Edit...", "done": true },
                { "action": "Delete...", "done": false }
            ]
        })
        .controller("Todo", Todo);

    function Todo($scope, model) {
        $scope.todo = model;
        console.log(model);
    }

})();