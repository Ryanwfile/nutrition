import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOverviewExample } from './button-overview-example.component';

describe('ButtonOverviewExampleComponent', () => {
  let component: ButtonOverviewExample;
  let fixture: ComponentFixture<ButtonOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonOverviewExample]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
