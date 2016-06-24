app.controller('HomeController', ['$scope','suggestions',
    function($scope, suggestions) {
    $scope.helloWorld = 'Hello Brian';
    $scope.posts = suggestions.posts;
}]);