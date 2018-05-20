// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatRestaurants', {
        templateUrl: './restaurants/meat-restaurants.component.html',
        controller: 'MeatRestaurantsController',
        controllerAs: 'vm'
    });
})();
