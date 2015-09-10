'use strict';

/**
 * @ngdoc function
 * @name photoGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoGalleryApp
 */
angular.module('photoGalleryApp')
    .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['instagram'];
function MainCtrl(instagram) {
    var that = this;

    that.init = init;

    that.init();

    function init() {
        instagram.fetchPuppies()
            .then(function(photos) {
                that.photos = photos;
            });
    }
}
