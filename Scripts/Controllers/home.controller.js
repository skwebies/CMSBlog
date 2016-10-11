/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController",
    [
        "$scope",
        "$routeParams",
        "postsApi",
        function($scope, $routeParams, postsApi) {
            $scope.title = "Home";

            //subscribing post by author
            $scope.subscribe = function (author) {
                if ($scope.data.subscribedAuthors.indexOf(author) == -1) {
                     $scope.data.subscribedAuthors.push(author);
                }


                $scope.saveSubscriptions();
                $scope.getFeed();
            };


            //finding the specific post by id
            $scope.$watch("data.posts", function (posts) {


                $scope.post = $scope.data.posts.filter(function (post) {
                    return post.id == $routeParams.id;

                })[0];
            });

            //up voting the post
            $scope.upVote = function (post) {
                post.upvotes++;
               postsApi.updateVotePost(post);
            };

            //down voting the post
            $scope.downVote = function (post) {
                post.downvotes++;
                postsApi.updateDownVotePost(post);
            };



        }
    ]);