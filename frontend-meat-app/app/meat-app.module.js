// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app', [
        'ui.router',
        'ngAnimate',
        'toastr'
    ]).config(meatAppConfig);

    meatAppConfig.$inject = [
        '$httpProvider',
        '$stateProvider'
    ];

    function meatAppConfig(
        $httpProvider,
        $stateProvider
    ) {
        // $httpProvider.interceptors.push('authInterceptorService');
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'meatHome'
            })
            .state('restaurants', {
                url: '/restaurants',
                component: 'meatRestaurants'
            })
            .state('restaurant-detail', {
                abstract: true,
                url: '/restaurants/:restaurantId',
                component: 'meatRestaurantDetail'
            })
            .state('restaurant-detail.menu', {
                url: '',
                component: 'meatMenu'
            })
            .state('restaurant-detail.reviews', {
                url: '',
                component: 'meatReviews'
            });
    }
})();
