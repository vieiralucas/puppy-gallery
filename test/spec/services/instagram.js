'use strict';

describe('Service: instagram', function () {
    beforeEach(module('photoGalleryApp'));

    var instagram,
        httpBackend;

    beforeEach(inject(function (_instagram_, $httpBackend) {
        instagram = _instagram_;
        httpBackend = $httpBackend;
    }));

    describe('fetchPuppies', function() {
        beforeEach(function() {
            httpBackend.whenJSONP('https://api.instagram.com/v1/users/244417594/media/recent?count=100&callback=JSON_CALLBACK&client_id=c0acb4ce0f084be28ab0b3fbd1510704')
                .respond({
                    data: [{
                        images: {
                            standard_resolution: {
                                width: 480,
                                height: 480
                            }
                        },
                        likes: {
                            count: 200
                        }
                    }, {
                        images: {
                            standard_resolution: {
                                width: 80,
                                height: 480
                            }
                        },
                        likes: {
                            count: 500
                        }
                    }, {
                        images: {
                            standard_resolution: {
                                width: 490,
                                height: 480
                            }
                        },
                        likes: {
                            count: 500
                        }
                    }, {
                        images: {
                            standard_resolution: {
                                width: 480,
                                height: 480
                            }
                        },
                        likes: {
                            count: 500
                        }
                    }]
                });
        });

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should filter image with less than 500 likes', function() {
            instagram.fetchPuppies().then(function(data) {
                data.forEach(function(datum) {
                    expect(datum.likes.count).toBeGreaterThan(499);
                });
            });

            httpBackend.flush();
        });

        it('should filter image with less than 480px of width', function() {
            instagram.fetchPuppies().then(function(data) {
                data.forEach(function(datum) {
                    expect(datum.images.standard_resolution.width).toBeGreaterThan(479);
                });
            });

            httpBackend.flush();
        });

        it('should filter image that are not squares', function() {
            instagram.fetchPuppies().then(function(data) {
                data.forEach(function(datum) {
                    expect(datum.images.standard_resolution.width).toEqual(datum.images.standard_resolution.height);
                });
            });

            httpBackend.flush();
        });
    });
});
