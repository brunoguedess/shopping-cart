// eslint-disable-next-line func-names
(function () {
    'use strict';

    angular.module('shopping-cart').factory('authService', authService);

    authService.$inject = [
        '$http',
        'shoppingCartConfig'
    ];

    function authService(
        $http,
        shoppingCartConfig
    ) {
        const authApiUrl = `${shoppingCartConfig.backendUrl}/oapi`;

        return {
            login,
            logout,
            signup
        };

        function login(user) {
            return submit('login', user);
        }

        function logout(user) {
            return submit('logout', user);
        }

        function signup(user) {
            return submit('signup', user);
        }

        function submit(url, param) {
            return $http.post(`${authApiUrl}/${url}`, param);
        }
    }
})();
