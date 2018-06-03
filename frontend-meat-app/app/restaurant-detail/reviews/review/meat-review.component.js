// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatReview', {
        bindings: {
            review: '='
        },
        templateUrl: './restaurant-detail/reviews/review/meat-review.component.html'
    });
})();
