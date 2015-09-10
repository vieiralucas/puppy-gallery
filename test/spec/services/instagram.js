'use strict';

describe('Service: instagram', function () {
    beforeEach(module('photoGalleryApp'));

    var instagram,
        httpBackend;

    beforeEach(inject(function (_instagram_, $httpBackend) {
        instagram = _instagram_;
    }));

    describe('fetch', function() {
        it('should lala', function() {
            expect(true).toBe(!true);
        });
    });
});
