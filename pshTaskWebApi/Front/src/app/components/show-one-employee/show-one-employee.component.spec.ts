import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneEmployeeComponent } from './show-one-employee.component';

describe('ShowOneEmployeeComponent', () => {
  let component: ShowOneEmployeeComponent;
  let fixture: ComponentFixture<ShowOneEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOneEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
