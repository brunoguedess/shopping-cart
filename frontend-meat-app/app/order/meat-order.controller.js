(function () {
    'use strict';

    angular.module('meat-app').controller('MeatOrderController', MeatOrderController);

    MeatOrderController.$inject = ['$state'];

    function MeatOrderController($state) {
        const vm = this;

        vm.checkOrder = checkOrder;

        activate();

        function activate() {

        }

        function checkOrder() {
            console.log('check order...');

            $state.go('order-summary');
        }
    }
})();
