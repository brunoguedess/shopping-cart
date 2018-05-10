// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('shopping-cart', [
        'ngAnimate',
        'toastr'
    ]).config(shoppingCartConfig);

    shoppingCartConfig.$inject = ['$httpProvider'];

    function shoppingCartConfig($httpProvider) {
        // $httpProvider.interceptors.push('authInterceptorService');
    }
})();
