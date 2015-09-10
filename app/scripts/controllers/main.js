'use strict';

/**
 * @ngdoc function
 * @name photoGalleryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoGalleryApp
 */
angular.module('photoGalleryApp')
  .controller('MainCtrl', mainCtrl);

    mainCtrl.$inject = ['instagram'];

function mainCtrl(instagram) {
  var self = this;

  init();

  function init() {
    instagram.fetchPopular()
      .then(function(photos) {
        self.photos = photos;
      })
      .catch(function(err) {
        console.log(err);
      });
  }

}
