// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatShoppingCartController', MeatShoppingCartController);

    MeatShoppingCartController.$inject = ['meatShoppingCartService'];

    function MeatShoppingCartController(meatShoppingCartService) {
        const vm = this;

        vm.getShoppingCart = getShoppingCart;
        vm.getShoppingCartTotal = getShoppingCartTotal;
        vm.removeItem = removeItem;
        vm.clearItems = clearItems;

        activate();

        function activate() {
            getShoppingCart();
        }

        function getShoppingCart() {
            vm.shoppingCart = meatShoppingCartService.items();
        }

        function getShoppingCartTotal() {
            return meatShoppingCartService.total();
        }

        function removeItem(item) {
            meatShoppingCartService.removeItem(item);
        }

        function clearItems() {
            meatShoppingCartService.clear();

            getShoppingCart();
        }
    }
})();
