/// <reference path="../angular.js" />
angular.module("mainModule")
    .directive("downvoteButton", [
        function () {
            return {
                restrict: "E",


                templateUrl: "Scripts/Directives/downvotes-button.html"
            };
        }

    ]);