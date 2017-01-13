var backFilters = angular.module('backFilters', []);

backFilters.filter('studentsdata',function () {
        return function(){
            console.log("sss");
        }
});
