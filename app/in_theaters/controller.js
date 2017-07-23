(function(angular){
    angular.module('moviecat.in_theaters',[])
        .controller('in_theaters.ctrl',['$scope','$routeParams','$route',function($scope,$routeParams,$route){
            $scope.type=$routeParams.type;
            $scope.page=$routeParams.page-0||1;
            $scope.q=$routeParams.q;
            console.log($routeParams)
            var obj = {
                count: 5,
                start:($scope.page-1)*5,
                q: $scope.q
            }
            var src = 'https://api.douban.com/v2/movie/'+$scope.type;
            jsonp(src,function(data){
                console.log(data);
                $scope.data=data;
                $scope.totalPage = Math.ceil(data.total/data.count)
                $scope.$apply()
            },obj)
           $scope.fn=function(data){
                if(data<1||data>$scope.totalPage ){
                    return
                }
               $scope.page=data;
               $route.updateParams({page: data});
           }

        }])
}(angular))