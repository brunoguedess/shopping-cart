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
                url: '/restaurants/:restaurantId',
                component: 'meatRestaurantDetail'
                /*,
                resolve: {
                    restaurant() {
                        return meatRestaurantsService.getRestaurants($stateParams.restaurantId)
                            .then(successGetRestaurants)
                            .catch(errorGetRestaurantes);

                        function successGetRestaurants(response) {
                            console.log(response);
                        }

                        function errorGetRestaurantes(response) {
                            console.log(response);
                        }
                    }
                } */
            });
    }
})();
