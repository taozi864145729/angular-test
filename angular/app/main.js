angular.module('app').controller('mainController',['$scope',function($scope){
    $scope.menus = [
        {'title':'dashboard','href':'#/dashboard'},
        {'title':'menu','children':[{'title':'menu','href':'#/menu'}]}
    ]
}]);