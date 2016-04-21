var testApp = angular.module('testApp', ['ngMaterial']);

testApp.service("TestOptions", [function() {
  this.options = [1,2,3];
}])

testApp.controller('testController', ['$scope', 'TestOptions', function($scope, TestOptions) {
  $scope.test = "hi guys"
  $scope.options = TestOptions.options;

}]);

