import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SearchService', () => {


  let service: SearchService
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(SearchService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });

  it('it should return SearchItems ', fakeAsync(() => {

    let response = {
      'resultCount': 1,
      results: [
        {
          'artistId': 78500,
          'artistName': 'U2',
          'trackName': 'Beautiful Day',
          'artworkUrl60': 'image.jpg'
        }
      ]
    }

    service.searchItem('U2');

    const req = httpTestingController.expectOne("https://itunes.apple.com/search?term=U2&media=music&limit=20");

    // expext a call this URL
    expect(req.request.method).toEqual('GET');

    // respond with this data when called
    req.flush(response);

    // Call tick whic actually processes te response
    tick();

    expect(service.results.length).toBe(1);
    expect(service.results[0].artist).toBe('U2');
    expect(service.results[0].name).toBe('Beautiful Day');
    expect(service.results[0].thumbnail).toBe('image.jpg');
    expect(service.results[0].artistId).toEqual(78500);


  }))

});
