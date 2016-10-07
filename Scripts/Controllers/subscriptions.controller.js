/// <reference path="../angular.js" />


angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscribed Authors";
            
            
            
            $scope.unsubscribe = function (author) {
                $scope.data.subscribedAuthors = $scope.data.subscribedAuthors.filter(function (subscribedAuthor) {
                    return subscribedAuthor != author;
                    
                });
               
              
                $scope.saveSubscriptions();
                $scope.getFeed();
            };


            $scope.getFeed();
            
            
        }
    ]);