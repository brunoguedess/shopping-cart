// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatMenuItemController', MeatMenuItemController);

    function MeatMenuItemController() {
        const vm = this;

        vm.addItem = addItem;

        function addItem() {
            console.log('addItem...');
        }
    }
})();
