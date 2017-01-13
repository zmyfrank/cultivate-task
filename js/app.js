var routerApp = angular.module('routerApp', ['ui.router','mainCtrl','oc.lazyLoad']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");
    $stateProvider
        /* 首页 */
        .state('home', {
            url: '/home',
            views: {
                '':{
                    templateUrl: 'tpls/home.html',
                },
                'banner@home': {
                    templateUrl: 'tpls/stpls/banner.html',
                },
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/home.css']);
                }]
            }
        })
        /* 小程序选项卡 */
        .state('tab', {
            url: '/tab',
            views: {
                '':{
                    templateUrl:'tpls/tab.html',
                }
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/home.css']);
                }]
            }
        })
        /* 定制案例 */
        .state('customized', {
            url: '/customized',
            views: {
                '':{
                    templateUrl:'tpls/customized.html',
                }
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/home.css']);
                }]
            }
        })
        /* 最新资讯 */
        .state('newslist', {
            url: '/newslist',
            views: {
                '':{
                    templateUrl:'tpls/newslist.html',
                },
                'banner@newslist': {
                    templateUrl: 'tpls/stpls/banner.html',
                },
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/home.css']);
                }]
            }
        })
        /* 小程序详情页面 */
        .state('details', {
            url: '/details',
            views: {
                '':{
                    templateUrl:'tpls/details.html',
                }
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/detailds.css']);
                }]
            }
        })
        /* 新闻详情页面 */
        .state('newsinfo', {
            url: '/newsinfo',
            views: {
                '':{
                    templateUrl:'tpls/newsinfo.html',
                }
            },
            resolve: {
                home_login: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load(['css/newsinfo.css']);
                }]
            }
        })
});
