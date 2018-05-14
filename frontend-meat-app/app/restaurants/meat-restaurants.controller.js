(function () {
    'use strict';

    angular.module('meat-app').controller('MeatRestaurantsController', MeatRestaurantsController);

    MeatRestaurantsController.$inject = ['meatRestaurantsService'];

    function MeatRestaurantsController(meatRestaurantsService) {
        const vm = this;

        vm.getRestaurants = getRestaurants;

        activate();

        function activate() {
            console.log('activate meat restaurantes controller...');

            getRestaurants();
        }

        function getRestaurants() {
            meatRestaurantsService.getRestaurants()
                .then(successGetRestaurants)
                .catch(errorGetRestaurants);

            function successGetRestaurants(response) {
                vm.restaurants = response.data;
            }

            function errorGetRestaurants(response) {
                console.log(response);
            }
        }
    }
})();
