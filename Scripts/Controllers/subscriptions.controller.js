

angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscribed Authors";
        }
    ]);