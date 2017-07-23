(function(angular){
    angular.module('moviecat',[
        'ngRoute',
        'moviecat.home_page',
        'moviecat.in_theaters',
        'moviecat.details',
        'moviecat.search'
    ])
    .config(['$routeProvider',function($routeProvider){
            $routeProvider
            .when('/home_page/:home?',{
                templateUrl:'/app/home_page/view.html',
                controller:'home_page.ctrl'
            })
            .when('/details/:id',{
                templateUrl:'/app/details/view.html',
                controller:'details.ctrl'
            })
            .when('/:type/:page?',{
                templateUrl:'/app/in_theaters/view.html',
                controller:'in_theaters.ctrl'
            })
            // 其他情况均跳往主页面
            .otherwise({
                redirectTo:'/home_page'
            })
        }])
    .controller('moviecat.ctrl',['$scope','$location','$routeParams',function($scope,$location){
        $scope.location=$location;
        $scope.$watch('location.url()',function(){
            $scope.hash = $scope.location.url()
            if($scope.hash.startsWith("/home_page")){
                $scope.hash  = "/home_page"
            }
            else if($scope.hash.startsWith("/in_theaters")){
                $scope.hash = "/in_theaters"
            }
           else if($scope.hash.startsWith("/coming_soon")){
                $scope.hash  = "/coming_soon"
            }
            else if($scope.hash.startsWith("/top250")){
                $scope.hash = "/top250"
            }
            else {
                $scope.hash = "/home_page";
            }
        })
      
    }])
}(angular))