app.controller('SuggestionController', ['$scope','suggestions','$routeParams',
    function($scope, suggestions,$routeParams) {
      $scope.post = suggestions.posts[$routeParams.id]
      console.log($scope.post)
      $scope.addComment = function(){
        if (!$scope.body || $scope.body === '') {
                return;
        }
        $scope.post.comments.push({
          body: $scope.body,
          upvotes: 0
        })
        $scope.body = ''
      }
      $scope.upVote = function(comment){
        comment.upvotes += 1
      }

}]);
