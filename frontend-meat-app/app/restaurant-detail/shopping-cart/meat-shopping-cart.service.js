// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('meatShoppingCartService', meatShoppingCartService);

    meatShoppingCartService.$inject = ['cartItemFactory'];

    function meatShoppingCartService(cartItemFactory) {
        let cartItems = [];

        return {
            addItem,
            clear,
            items,
            removeItem,
            total
        };

        function items() {
            return cartItems;
        }

        function clear() {
            cartItems = [];
        }

        function addItem(item) {
            let cartItem = cartItems.find(cItem => cItem.menuItem.id === item.id);

            if (cartItem) {
                cartItem = increaseItemQuantity(cartItem);
            } else {
                cartItem = cartItemFactory.create(item, 1);

                cartItems.push(cartItem);
            }
        }

        function removeItem(item) {
            cartItems.splice(cartItems.indexOf(item), 1);
        }

        function increaseItemQuantity(item) {
            const itemAdded = item;

            itemAdded.quantity += 1;

            return itemAdded;
        }

        function total() {
            return cartItems
                .map(item => item.value())
                .reduce((prev, value) => prev + value, 0);
        }
    }
})();
