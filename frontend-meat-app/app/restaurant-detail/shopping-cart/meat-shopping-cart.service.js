// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('meatShoppingCartService', meatShoppingCartService);

    function meatShoppingCartService($http) {
        return {
            getShoppingCart
        };

        function getShoppingCart(search = '') {
            return 1;
        }
    }
})();
