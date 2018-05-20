// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').controller('MeatReviewsController', MeatReviewsController);

    MeatReviewsController.$inject = ['meatReviewsService'];

    function MeatReviewsController(meatReviewsService) {
        const vm = this;

        vm.getReviews = getReviews;

        activate();

        function activate() {
            getReviews();
        }

        function getReviews() {
            meatReviewsService.getReviews()
                .then(successGetReviews)
                .catch(errorGetReviews);

            function successGetReviews(response) {
                vm.reviews = response.data;
            }

            function errorGetReviews(response) {
                console.log(response);
            }
        }
    }
})();
