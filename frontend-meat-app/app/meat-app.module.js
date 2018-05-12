// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app', [
        'ngAnimate',
        'toastr'
    ]).config(meatAppConfig);

    meatAppConfig.$inject = ['$httpProvider'];

    function meatAppConfig($httpProvider) {
        // $httpProvider.interceptors.push('authInterceptorService');
    }
})();
