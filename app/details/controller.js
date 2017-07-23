(function(angular){
    angular.module('moviecat.details',[])
        .controller('details.ctrl',['$scope','$routeParams',function($scope,$routeParams){
            jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id,function(data){
                console.log(data)
                $scope.detailData = data;
                $scope.$apply();
            })
        }])
}(angular))