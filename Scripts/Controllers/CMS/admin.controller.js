/// <reference path="../../angular.js" />

angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Administration";

            $scope.newPost = {};
            
            $scope.addPost = function () {
                postsApi.addPost($scope.newPost)
                    .then(function (data) {
                        if (data != null)
                            $scope.data.posts.push(data);
                        $scope.newPost = {};
                    });
            };

            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                    .then(function () {

                        var index = $scope.data.posts.map(function (post) {

                            return post.id;

                        }).indexOf(post.id);

                        $scope.data.posts.splice(index, 1);
                    });
            };
        }
    ]);