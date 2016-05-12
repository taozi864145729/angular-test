angular.module('app',[]).controller('selectController',['$scope',function($scope){
    var self = this;
    $scope.pageSelect={
        selectPage:'',
        select2:'',
        select3:''
    }
    $scope.selectList =
           [{
               'id':1,type:'time','numbers':[{'description':'时间','day':1,'week':'7','month':30}]
           },{
               'id':2,'type':'local','numbers':[{'description':'当地','day':'4','week':'8','month':28}]
           },{
               'id':3,'type':'age','numbers':[{'description':'年龄','day':'5','week':'9','month':29}]
           }
           ]
    $scope.selectList2 =
        [{
            'id':1,type:'time','numbers':[{'description':'时间','day':1,'week':'7','month':30}]
        },{
            'id':2,'type':'local','numbers':[{'description':'当地','day':'4','week':'8','month':28}]
        },{
            'id':3,'type':'age','numbers':[{'description':'年龄','day':'5','week':'9','month':29}]
        }
        ]
    $scope.selectList3 =
        [{
            'id':1,type:'time','numbers':2
        },{
            'id':2,'type':'local','numbers':1
        },{
            'id':3,'type':'age','numbers':3
        }
        ]
}]);