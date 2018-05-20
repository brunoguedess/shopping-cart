// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatShoppingCartController', MeatShoppingCartController);

    MeatShoppingCartController.$inject = ['meatShoppingCartService'];

    function MeatShoppingCartController(meatShoppingCartService) {
        const vm = this;

        vm.getShoppingCart = getShoppingCart;

        activate();

        function activate() {
            getShoppingCart();
        }

        function getShoppingCart() {
            meatShoppingCartService.getShoppingCart()
                .then(successGetShoppingCart)
                .catch(errorGetShoppingCart);

            function successGetShoppingCart(response) {
                vm.shoppingCart = response.data;
            }

            function errorGetShoppingCart(response) {
                console.log(response);
            }
        }
    }
})();
