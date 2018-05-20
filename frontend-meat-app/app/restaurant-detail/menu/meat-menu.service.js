// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('meatMenuService', meatMenuService);

    meatMenuService.$inject = ['$http'];

    function meatMenuService($http) {
        const backendUrl = 'http://localhost:3000';

        return {
            getMenu
        };

        function getMenu() {
            return $http.get(`${backendUrl}/menu`);
        }
    }
})();
