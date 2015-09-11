'use strict';

angular.module('photoGalleryApp')
    .controller('ModalCtrl', ModalCtrl);

ModalCtrl.$inject = ['$scope', '$modalInstance'];
function ModalCtrl($scope, $modalInstance) {
    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.close();
    };
}
