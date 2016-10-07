/// <reference path="../angular.js" />

angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",

        function($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when("/",
                {
                    templateUrl: "Views/Home.html",
                    controller: "HomeController",
                    caseInsensitiveMatch: true,
                    activeTab: 'Home'

                })
                
                .when("/Subscriptions", {
                    templateUrl: "Views/SubscribedAuthors.html",
                    controller: "SubscriptionsController",
                    caseInsensitiveMatch: true,
                    activeTab: 'Subscriptions'


                })
            .when("/Admin", {
                templateUrl: "Views/CMS/Admin.html",
                controller: "AdminController",
                caseInsensitiveMatch: true,
                activeTab: 'Admin'


            })
            .otherwise({
                redirectTo: '/'
            });



        }
    ]);