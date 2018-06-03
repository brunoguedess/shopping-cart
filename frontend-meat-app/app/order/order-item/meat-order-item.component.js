// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatOrderItem', {
        bindings: {
            orderItem: '='
        },
        templateUrl: './order/order-item/meat-order-item.component.html'
    });
})();
