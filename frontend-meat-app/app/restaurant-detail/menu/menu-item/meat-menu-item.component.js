// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatMenuItem', {
        bindings: {
            restaurant: '='
        },
        templateUrl: './restaurant-detail/menu/meat-menu-item.component.html'
    });
})();
