// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatMenuController', MeatMenuController);

    MeatMenuController.$inject = ['meatMenuService'];

    function MeatMenuController(meatMenuService) {
        const vm = this;

        vm.getMenu = getMenu;

        activate();

        function activate() {
            getMenu();
        }

        function getMenu() {
            meatMenuService.getMenu()
                .then(successGetMenu)
                .catch(errorGetMenu);

            function successGetMenu(response) {
                vm.menu = response.data;
            }

            function errorGetMenu(response) {
                console.log(response);
            }
        }
    }
})();
