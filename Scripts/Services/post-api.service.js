/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("postsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://code.webonmaster.com/api";
            var posts = api + "/posts";
            var upvotes = posts + "/upvote";
            var downvotes = posts + "/downvote";

            //GET Posts
            this.getPosts = function () {
                var deferred = $q.defer();
                var vm = this;
                $http.get(posts)
                    .then(function (response) {
                        this.posts = response.data;
                        deferred.resolve(response.data);
                        
                    }, function () {

                        deferred.resolve([]);

                    });
                return deferred.promise;
            };

            // Add Post
            this.addPost = function (newPost) {

                var deferred = $q.defer();

                $http.post(posts, newPost)
                    .then(function (response) {
                        deferred.resolve(response.data);

                    }, function () {
                        deferred.resolve([]);

                    });
                return deferred.promise;

            };

            // Update Post
            this.updatePost = function (updatePost) {

                var deferred = $q.defer();

                $http.put(posts + '/' + updatePost.id, updatePost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function () {
                        deferred.resolve([]);

                    });

                return deferred.promise;


            };

            // Update upvotes for Post
            this.updateVotePost = function (updateVotePost) {

                var deferred = $q.defer();

                $http.put(upvotes + '/'+ updateVotePost.id, updateVotePost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function () {
                        deferred.resolve([]);

                    });

                return deferred.promise;


            };


            // Update downvotes for Post
            this.updateDownVotePost = function (updateVotePost) {

                var deferred = $q.defer();

                $http.put(downvotes + '/' + updateVotePost.id, updateVotePost)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function () {
                        deferred.resolve([]);

                    });

                return deferred.promise;


            };

            // Delete Post
            this.deletePost = function (id) {

                var deferred = $q.defer();

                $http.delete(posts + '/' + id)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function () {

                        deferred.resolve([]);
                    });
                return deferred.promise;
            };

            
        }
    ]);
