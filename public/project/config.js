/**
 * Created by user on 01-08-2017.
 */
(function () {
    angular
        .module("Foood")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/",{
                templateUrl: "views/home/templates/home.view.client.html",
                controller: 'homeController',
                controllerAs: 'model'
            })
            .when("/login",{
                templateUrl:'',
                controller: 'homeController',
                controllerAs: 'model'
            })
            .when("/register",{
                templateUrl:'',
                controller: 'homeController',
                controllerAs: 'model'
            })
            .when("/search/:basedLocation",{
                templateUrl:'views/home/templates/home.view.client.html',
                controller: 'homeController',
                controllerAs: 'model'
            })
    }
})();
