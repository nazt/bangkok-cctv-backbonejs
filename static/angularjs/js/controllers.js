'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function CctvListCtrl ($scope, Cctv, $window) {
	$scope.cctvs = Cctv.query();
	$scope.click_on_cctv = function(cctv) {
		console.log(cctv);
	}
}