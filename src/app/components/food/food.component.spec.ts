import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// import {HttpClientTestingModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { FoodComponent } from './food.component';
import { HttpService } from '../../http.service';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodComponent ],
      imports: [HttpClientTestingModule],
      providers: [HttpService],
      schemas: [NO_ERRORS_SCHEMA]   
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {    
    expect(component).toBeTruthy();
  });
});

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { FoodComponent } from './food.component';

// describe('FoodComponent', () => {
//   let component: FoodComponent;
//   let fixture: ComponentFixture<FoodComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ FoodComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(FoodComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
