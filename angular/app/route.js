var app = angular.module('app',['ngRoute']);


app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/dashboard',{
            templateUrl:'/dashboard/dashboard.html',
            controller:'dashboardController'
        })
        .when('/menu',{
            templateUrl:'/menu/menu.html',
            controller:'menuController'
        })
        .otherwise({
            redirectTo:'/dashboard'
        });
}]);