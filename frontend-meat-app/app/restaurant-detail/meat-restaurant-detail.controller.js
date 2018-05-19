// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatRestaurantDetailController', MeatRestaurantDetailController);

    MeatRestaurantDetailController.$inject = [
        'meatRestaurantsService',
        '$stateParams'
    ];

    function MeatRestaurantDetailController(
        meatRestaurantsService,
        $stateParams
    ) {
        const vm = this;

        activate();

        function activate() {
            showRestaurantDetail();
        }

        function showRestaurantDetail() {
            meatRestaurantsService.getRestaurants($stateParams.restaurantId)
                .then(successGetRestaurants)
                .catch(errorGetRestaurantes);

            function successGetRestaurants(response) {
                vm.restaurant = response.data[0];
            }

            function errorGetRestaurantes(response) {
                console.log(response);
            }
        }
    }
})();
