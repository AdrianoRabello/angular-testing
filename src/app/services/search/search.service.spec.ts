import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SearchService } from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SearchService', () => {


  let service:SearchService

  beforeEach(() => 
  TestBed.configureTestingModule({
    imports: [HttpClientModule, HttpClientTestingModule, HttpBackend],
    providers: [
      SearchService
    ]
  }));

  it('should be created', () => {
    const service: SearchService = TestBed.get(SearchService);
    expect(service).toBeTruthy();
  });
});
