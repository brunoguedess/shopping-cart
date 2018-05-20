// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatCartItem', {
        bindings: {
            restaurant: '='
        },
        templateUrl: './restaurant-detail/shopping-cart/cart-item/meat-cart-item.component.html'
    });
})();
