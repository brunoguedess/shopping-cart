// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('shopping-cart').factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = [
        '$q',
        '$injector',
        'shoppingCartConfig',
        'locationService'
    ];

    function authInterceptorService(
        $q,
        $injector,
        shoppingCartConfig,
        locationService
    ) {
        return {
            request,
            response,
            responseError
        };

        function request(req) {
            const userSessionService = $injector.get('userSessionService');
            const isAuthPage = locationService.containsPage(shoppingCartConfig.authPage);

            if (!userSessionService.hasUser() && !isAuthPage) {
                locationService.changeUrl(shoppingCartConfig.authPage);

                return null;
            }

            return req;
        }

        function response(res) {
            return res;
        }

        function responseError(res) {
            if (res.status === 403) {
                const userSessionService = $injector.get('userSessionService');

                userSessionService.removeUser();

                locationService.changeUrl(shoppingCartConfig.authPage);
            }

            return $q.reject(res);
        }
    }
})();
