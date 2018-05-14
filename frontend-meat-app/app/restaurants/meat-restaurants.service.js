(function(){
    'use strict';

    angular.module('meat-app').factory('meatRestaurantsService', meatRestaurantsService);

    meatRestaurantsService.$inject = ['$http'];

    function meatRestaurantsService($http) {
        return {
            getRestaurants
        };

        function getRestaurants() {
            return $http.get('http://localhost:3000/restaurants');
        }
    }
})();