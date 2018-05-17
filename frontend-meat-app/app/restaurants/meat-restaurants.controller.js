// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatRestaurantsController', MeatRestaurantsController);

    MeatRestaurantsController.$inject = ['meatRestaurantsService'];

    function MeatRestaurantsController(meatRestaurantsService) {
        const vm = this;

        vm.showInputSearch = false;
        vm.getRestaurants = getRestaurants;
        vm.toggleSearch = toggleSearch;

        activate();

        function activate() {
            getRestaurants();
        }

        function getRestaurants() {
            meatRestaurantsService.getRestaurants(vm.search)
                .then(successGetRestaurants)
                .catch(errorGetRestaurants);

            function successGetRestaurants(response) {
                vm.restaurants = response.data;
            }

            function errorGetRestaurants(response) {
                console.log(response);
            }
        }

        function toggleSearch() {
            vm.showInputSearch = !vm.showInputSearch;
        }
    }
})();
