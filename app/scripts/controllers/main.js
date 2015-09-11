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

MainCtrl.$inject = ['$rootScope', 'instagram', '$modal'];
function MainCtrl($rootScope, instagram, $modal) {
    var that = this;

    that.init = init;
    that.showDetails = showDetails;

    that.init();

    function init() {
        instagram.fetchPuppies()
            .then(function(photos) {
                that.photos = photos;
            });
    }

    function showDetails(photo) {
        var newScope = $rootScope.$new();
        newScope.photo = photo;

        $modal.open({
              animation: true,
              templateUrl: 'myModalContent.html',
              controller: 'ModalCtrl',
              scope: newScope
        });
    }
}
