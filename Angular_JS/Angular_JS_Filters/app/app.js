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
		vm.customSorter = customSorter;
		
		function getExpiryDate(days) {
			var now =new Date();
			return now.setDate(now.getDate() + days);
		}

		function customSorter(product) {
			return product.expiry < 5 ? 0 : product.price;
		}


		// vm.htmlSnippet = 
		// 	'Pretty text with some links:\n'+
		// 	'http://angularjs.org/,\n'+
		// 	'mailto:us@somewhere.org,\n'+
		// 	'another@somewhere.org,\n'+
		// 	'and one more: ftp://127.0.0.1/.';
	}

})();

















