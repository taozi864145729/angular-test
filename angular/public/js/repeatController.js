angular.module('app', []).controller('repeatController',function($scope){
    var self = this;
    //
    //Highcharts.chart('container',{
    //    chart: {
    //        type: 'areaspline',
    //        backgroundColor: 'transparent',
    //        borderColor:'orange',
    //        borderWidth: 0,
    //        defaultSeriesType: "bar",
    //        width: undefined,
    //        alignTicks:false
    //    },
    //    title: {
    //        text: 'Safe&Comfortable',
    //        align: 'right',
    //        style:{
    //            color:'#5bb49e',
    //            fontSize:'25',
    //        }
    //    },
    //    subtitle: {
    //        text: '23℃/40℃',
    //        align: 'right',
    //        style:{
    //            color:'#5bb49e',
    //            fontSize:'16',
    //        }
    //    },
    //    credits: {
    //          enabled: false
    //    },
    //    legend:{
    //          enabled: false
    //    },
    //    yAxis:{
    //        title:{
    //            text:''
    //        },
    //        gridLineWidth: 0,
    //        labels: {
    //            enabled: false
    //        }
    //    },
    //    xAxis:{
    //        title:{
    //            text:''
    //        },
    //        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //         },
    //        labels: {
    //            enabled: false
    //     },
    //    series:[{
    //            data: [20, 21, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    //            color:'#fcc6ea',
    //    }]
    //});
    //function Dexspander($scope) {
    //    $scope.ExpandArray = [];
    //
    //    //Push or pop necessary elements for tracking
    //    $scope.DespopulatArray = function (identifier, element) {
    //        if (_.indexOf($scope.ExpandArray, identifier + element) != -1) {
    //            $scope.ExpandArray.splice(_.indexOf($scope.ExpandArray, identifier + element), 1);
    //        } else {
    //            $scope.ExpandArray.push(identifier + element);
    //        }
    //    }
    //
    //    //Change class of necessary elements
    //    $scope.Dexspand = function (identifier, element) {
    //        if (_.indexOf($scope.ExpandArray, identifier + element) != -1) {
    //            return "expand";
    //        } else {
    //            return "collapse";
    //        }
    //    }
    //}
    //$scope.doSomething = function(ev) {
    //    $scope.collapse = false;
    //    var element = ev.srcElement ? ev.srcElement : ev.target;
    //    console.log(element+'ssssss', angular.element(element));
    //}
    //this.modules = {
    //    'a','v'
    //}
    self.Init = function(){
        $scope.isCollapsed = false;
        console.log('successful');
    }
    self.Init();

    //function CollapseDemoCtrl($scope) {
    //
    //}
});