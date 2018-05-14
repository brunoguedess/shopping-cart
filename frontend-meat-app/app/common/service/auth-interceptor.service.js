// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('meat-app').factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = [
        '$q',
        '$injector',
        'meatAppConfig',
        'locationService'
    ];

    function authInterceptorService(
        $q,
        $injector,
        meatAppConfig,
        locationService
    ) {
        return {
            request,
            response,
            responseError
        };

        function request(req) {
            const userSessionService = $injector.get('userSessionService');
            const isAuthPage = locationService.containsPage(meatAppConfig.authPage);

            if (!userSessionService.hasUser() && !isAuthPage) {
                locationService.changeUrl(meatAppConfig.authPage);

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

                locationService.changeUrl(meatAppConfig.authPage);
            }

            return $q.reject(res);
        }
    }
})();
