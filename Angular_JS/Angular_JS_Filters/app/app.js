(function() {
	'use strict';

	angular
		.module("app", ["ngSanitize", "feature"])
		.controller("defaultController", defaultController)
		.filter("labelCase", labelCase)
		.filter("skip", skip);

	function defaultController(productData) {
		var vm = this;
		vm.pageCount = 3;
		vm.products = productData.products;
		vm.getExpiryDate = getExpiryDate;
		vm.customSorter = customSorter;
		vm.selectedProducts = selectedProducts;


		function getExpiryDate(days) {
			var now = new Date();
			return now.setDate(now.getDate() + days);
		}

		function customSorter(product) {
			return product.expiry < 5 ? 0 : product.price;
		}

		function selectedProducts(product) {
			return product.category === 'Fish' || product.name === 'Bananas'
		}
	}

		function labelCase() {
			return function (value, reverse) {
				if (angular.isString(value)) {
					return reverse
						? value.substr(0, 1).toLowerCase() + value.substr(1).toUpperCase()
						: value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
				} else {
					return value;
				}
			};
		}

		function skip() {
			return function (value, count) {
				if (angular.isArray(value)) {
					return value.slice(count);
				} else {
					return value;
				}
			};
		}


})();

















