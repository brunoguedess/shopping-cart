// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('meatRestaurantsService', meatRestaurantsService);

    meatRestaurantsService.$inject = ['$http'];

    function meatRestaurantsService($http) {
        const backendUrl = 'http://localhost:3001';

        return {
            getRestaurants
        };

        function getRestaurants(search = '') {
            return $http.get(`${backendUrl}/restaurants?q=${search}`);
        }
    }
})();
