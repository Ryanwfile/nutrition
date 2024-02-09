import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ ],
      providers: [ HttpClient, HttpHandler ],
      schemas: []   
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
