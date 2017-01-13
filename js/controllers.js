var mainCtrl = angular.module('mainCtrl', []);

/* index页面 */
mainCtrl.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello,欢迎来到地瓜烧后台管理系统'
        };
    }
]);

/* 新闻列表 */
mainCtrl.controller('HelloCtrl', ['$scope',
    function($scope) {

    }
]);



/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
mainCtrl.controller("list",function ($scope) {
    $scope.html = 2;
})




