'use strict';

describe('Controller: MainCtrl', function () {

    beforeEach(module('photoGalleryApp'));

    var MainCtrl,
        scope,
        instagram;

    beforeEach(inject(function ($q) {
        instagram = {
            fetchPuppies: function() {
                return $q.resolve(['p1', 'p2', 'p3']);
            }
        };
    }));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
            instagram: instagram
        });
    }));

    describe('init', function() {
        it('should call instagram.fetchPuppies', function() {
            var spyFetchPuppies = spyOn(instagram, 'fetchPuppies').and.callThrough();

            MainCtrl.init();
            expect(spyFetchPuppies).toHaveBeenCalled();
        });

        it('should add puppies photos to scope', function() {
            MainCtrl.init();
            scope.$apply();
            expect(MainCtrl.photos).toEqual(['p1', 'p2', 'p3']);
        });
    });
});
