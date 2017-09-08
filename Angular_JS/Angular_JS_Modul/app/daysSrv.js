(function () {
    "use strict";

    angular.module("app")
        .service("days", days);

    function days() {
        this.today = new Date().getDay();
        this.tomorrow = (this.today+1)%7;
    }


})();