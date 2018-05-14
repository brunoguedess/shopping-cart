// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatRestaurant', {
        bindings: {
            restaurant: '='
        },
        templateUrl: './restaurants/restaurant/meat-restaurant.component.html'
    });
})();
