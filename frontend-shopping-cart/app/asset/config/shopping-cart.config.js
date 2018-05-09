// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('shopping-cart').constant('shoppingCartConfig', {
        backendUrl: 'http://localhost:3003',
        itemsPerPage: 5,
        authPage: '/auth.html'
    });
}());
