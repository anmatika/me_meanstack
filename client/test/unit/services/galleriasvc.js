'use strict';

describe('Service: galleriaSvc', function () {

  // load the service's module
  beforeEach(module('karvinenApp'));

  // instantiate service
  var galleriaSvc,  
  $httpBackend,
  $q

  beforeEach(inject(function (_galleriaSvc_, $injector) {
    galleriaSvc = _galleriaSvc_;
    $httpBackend = $injector.get('$httpBackend');
  }));

  it('should do something', function () {
    expect(!!galleriaSvc).toBe(true);
  });

  it('galleriaSvc.getItems returns images in proper', function() {
    
    // images coming as ajax call response from the server
    var responseImages = {
        "images": {
            "galleria_1": [
                "2.jpg",
                "3.jpg",
                "4.jpg"
            ],
            "galleria_2": [
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg",
                "6.jpg"
            ]
        }
    },

    // expected resolved data (slides) in deferred.resolve(slides)
    expectedResolvedData = [
      {
        header: 'galleria_1',
        images: [
                  { image: '/images/galleria/galleria_1/2.jpg'},
                  { image: '/images/galleria/galleria_1/3.jpg'}, 
                  { image: '/images/galleria/galleria_1/4.jpg'}
                ]
      },
      {
        header: 'galleria_2',
        images: [
                  { image: '/images/galleria/galleria_2/1.jpg'},
                  { image: '/images/galleria/galleria_2/2.jpg'}, 
                  { image: '/images/galleria/galleria_2/3.jpg'},
                  { image: '/images/galleria/galleria_2/4.jpg'},
                  { image: '/images/galleria/galleria_2/5.jpg'},
                  { image: '/images/galleria/galleria_2/6.jpg'}
                ]
      }
    ],
    promise = galleriaSvc.getSlides(),
    resolvedData;

    // expect /galleria to be called and mock the response
    $httpBackend.expectGET('/galleria').respond(responseImages);
    
    promise.then(function(data){
      resolvedData = data;
    });

    // run the $http.get('/galleria')
    $httpBackend.flush();

    expect(resolvedData).toEqual(expectedResolvedData);
  });
});
