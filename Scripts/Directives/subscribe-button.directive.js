/// <reference path="../angular.js" />

angular.module("mainModule")
    .directive("subscribeButton", [
        function () {
            return {
                restrict: "EC",
                scope: {
                    subscribed:"=ngModel"
                },

                templateUrl: 'Scripts/Directives/subscribe-button.html'
            };
        }

    ]);