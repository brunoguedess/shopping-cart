// eslint-disable-next-line func-names
(function () {
    angular.module('meat-app').component('meatReview', {
        bindings: {
            restaurant: '='
        },
        templateUrl: './restaurant-detail/reviews/review/meat-review.component.html'
    });
})();
