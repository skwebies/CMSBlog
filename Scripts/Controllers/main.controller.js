/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController",
    [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function($scope,  $location, $route, postsApi) {
            $scope.$route = $route;

            $scope.data = {
                posts: [],
                subscribedAuthors: [],
                tamil: []
            };


            //initial posts loaded
            postsApi.getPosts()
                .then(function (data) {
                    if (data != null) {
                        $scope.data.posts = data;
                        $scope.getFeed();
                    }
                });

            //Geting the subscribed feeds
            $scope.getFeed = function () {
                angular.forEach($scope.data.posts, function (post) {
                    if ($scope.data.subscribedAuthors.indexOf(post.author) != -1)
                        post.subscribed = true;
                    else
                        post.subscribed = false;

                });


            };


            //loading subscribed authors
            $scope.loadSubscriptions = function () {

                var dataString = localStorage.getItem("subscribedAuthors");
                if (dataString)
                    $scope.data.subscribedAuthors = JSON.parse(dataString);


            };
            //saving the subscribed authors
            $scope.saveSubscriptions = function () {
                var jsonString = JSON.stringify($scope.data.subscribedAuthors);
                localStorage.setItem("subscribedAuthors", jsonString);

            };



            $scope.loadSubscriptions();
            $scope.getFeed();

            $scope.go = function(url) {
                $location.path(url);
            };
        }
    ]);