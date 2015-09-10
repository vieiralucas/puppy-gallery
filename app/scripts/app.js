'use strict';

/**
 * @ngdoc overview
 * @name photoGalleryApp
 * @description
 * # photoGalleryApp
 *
 * Main module of the application.
 */
angular
    .module('photoGalleryApp', [
        'ngRoute'
    ])
    .config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .otherwise({
            redirectTo: '/'
        });
}
