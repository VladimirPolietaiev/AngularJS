(function() {
	'use strict';

	angular
		.module("app", ["ngSanitize", "feature"])
		.controller("defaultController", defaultController);

	function defaultController(productData) {
		var vm = this;
		vm.pageCount = 3;
		vm.products = productData.products;
		vm.getExpiryDate = getExpiryDate;
		
		function getExpiryDate(days) {
			var now =new Date();
			return now.setDate(now.getDate() + days);
		}


		// vm.htmlSnippet = 
		// 	'Pretty text with some links:\n'+
		// 	'http://angularjs.org/,\n'+
		// 	'mailto:us@somewhere.org,\n'+
		// 	'another@somewhere.org,\n'+
		// 	'and one more: ftp://127.0.0.1/.';
	}

})();

















