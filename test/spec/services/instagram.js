'use strict';

describe('Service: instagram', function () {

  // load the service's module
  beforeEach(module('photoGalleryApp'));

  // instantiate service
  var instagram;
  beforeEach(inject(function (_instagram_) {
    instagram = _instagram_;
  }));

  describe('fetch', function() {
    it('should lala', function() {
        expect(true).toBe(!true);
    });

  });
});
