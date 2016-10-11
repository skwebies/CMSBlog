/// <reference path="../../angular.js" />
angular.module("mainModule")
    .controller("EditPostController", [
        "$scope",
        "$routeParams",
        function ($scope, $routeParams) {

            $scope.title = "Edit Post";

            $scope.$watch("data.posts", function (posts) {


                $scope.post = $scope.data.posts.filter(function (post) {
                    return post.id == $routeParams.id;

                })[0];
            });


            $scope.updatePost = function () {
                postsApi.updatePost($scope.post)
                    .then(function (post) {
                        $scope.post = post;

                    });
                $scope.go("/Admin");
            }


        }

    ]);