// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').constant('meatAppConfig', {
        backendUrl: 'http://localhost:3003',
        itemsPerPage: 5,
        authPage: '/auth.html'
    });
}());
