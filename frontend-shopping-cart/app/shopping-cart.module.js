// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('shopping-cart', []).config(shoppingCartConfig);

    shoppingCartConfig.$inject = ['$httpProvider'];

    function shoppingCartConfig($httpProvider) {
        console.log($httpProvider);
        // $httpProvider.interceptors.push('authInterceptorService');
    }
})();
