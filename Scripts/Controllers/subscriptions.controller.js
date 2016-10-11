/// <reference path="../angular.js" />


angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscriptions";

            $scope.getFeed();

            $scope.unsubscribe = function (author) {
                $scope.data.subscribedAuthors = $scope.data.subscribedAuthors.filter(function (subscribedAuthor) {
                    return subscribedAuthor != author;

                });

                $scope.getFeed();
                $scope.saveSubscriptions();

            };




        }
    ]);