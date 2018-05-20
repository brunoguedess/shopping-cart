// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatMenuItem', {
        bindings: {
            menuItem: '='
        },
        templateUrl: './restaurant-detail/menu/menu-item/meat-menu-item.component.html'
    });
})();
