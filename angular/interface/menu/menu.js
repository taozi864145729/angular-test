angular.module('app').controller('menuController',['$scope',function($scope){
    $scope.userList =[
        {id:1,name:'anna',type:"person"},
        {id:2,name:'lisa',type:"person"},
        {id:3,name:'alis',type:"person"},
    ]
}]);