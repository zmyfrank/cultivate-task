var backDirectives = angular.module('backeDirectives', []);

backDirectives.directive('backpaging', ['$location', function ($location) {
    return {
        restrict: 'AE',
        repalce: false,
        scope: {

        },
        controller: function ($scope, $element, $attrs, $transclude) {

        },
        link: function (scope, element, attrs, supermanCtrl) {

        }
    }
}
]);

