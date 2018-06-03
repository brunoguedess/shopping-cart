// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatReviewsController', MeatReviewsController);

    MeatReviewsController.$inject = [
        'meatReviewsService',
        '$stateParams'
    ];

    function MeatReviewsController(
        meatReviewsService,
        $stateParams
    ) {
        const vm = this;

        vm.getReviews = getReviews;

        activate();

        function activate() {
            getReviews();
        }

        function getReviews() {
            meatReviewsService.reviews($stateParams.restaurantId)
                .then(successReviews)
                .catch(errorReviews);

            function successReviews(response) {
                vm.reviews = response.data;
            }

            function errorReviews(response) {
                console.log(response);
            }
        }
    }
})();
