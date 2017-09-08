(function () {
    "use strict";
    
    angular.module("app",[
        "common",
        "feature"
    ])
        .config(appConfig)
        .run(appRun);

    function appConfig() {
console.log(" arr config",);
    }

    function appRun() {
console.log("app Run ",);
    }

})();