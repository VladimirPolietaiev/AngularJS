(function () {
    "use strict";

    angular
        .module("feature")
        .service("days", days);

    function days(nowValue) {
        // this.today = new Date().getDay();
        this.today = nowValue.getDay();
        this.tomorrow = (this.today+1)%7;
    }


})();