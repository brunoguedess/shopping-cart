// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('cartItemFactory', cartItemFactory);

    function cartItemFactory() {
        return {
            create
        };

        function create(menuItem, quantity) {
            return new CartItem(menuItem, quantity);
        }

        function CartItem(menuItem, quantity) {
            const vm = this;

            vm.value = value;
            vm.menuItem = menuItem;
            vm.quantity = quantity;

            function value() {
                return vm.menuItem.price * vm.quantity;
            }
        }
    }
})();
