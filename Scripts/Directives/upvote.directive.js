/// <reference path="../angular.js" />
angular.module("mainModule")
    .directive("upvoteButton", [
        function () {
            return {
                restrict: "E",


                templateUrl: "Scripts/Directives/upvotes-button.html"
            };
        }

    ]);