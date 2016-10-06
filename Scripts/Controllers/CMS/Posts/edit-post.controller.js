/// <reference path="../../angular.js" />
angular.module("mainModule")
    .controller("EditPostController", [
        "$scope",
        function ($scope) {

            $scope.title = "Edit Post";
        }

    ]);