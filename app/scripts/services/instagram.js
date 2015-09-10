'use strict';

/**
 * @ngdoc service
 * @name photoGalleryApp.instagram
 * @description
 * # instagram
 * Service in the photoGalleryApp.
 */
angular.module('photoGalleryApp')
  .service('instagram', instagram);

instagram.$inject = ['$http', '$q'];

function instagram($http, $q) {
  var clientId = 'c0acb4ce0f084be28ab0b3fbd1510704';

  return {
    fetchPopular: fetchPopular
  };

  function fetchPopular() {
    var deferred = $q.defer();

    function makeRequest(url) {
      $http.jsonp(url)
        .then(function(resp) {
          resp = resp.data;

          var filteredData = resp.data.filter(function(data) {
            return data.likes.count > 500
              && data.images.standard_resolution.width > 480
              && data.images.standard_resolution.width === data.images.standard_resolution.height;
          });

          deferred.resolve(filteredData);
        })
        .catch(function(err) {
          deferred.reject(err);
        });
    }

    makeRequest('https://api.instagram.com/v1/users/244417594/media/recent?count=100&callback=JSON_CALLBACK&client_id=' + clientId);

    return deferred.promise;
  }
}
