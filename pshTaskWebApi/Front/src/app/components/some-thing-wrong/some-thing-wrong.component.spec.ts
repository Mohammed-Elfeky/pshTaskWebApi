import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeThingWrongComponent } from './some-thing-wrong.component';

describe('SomeThingWrongComponent', () => {
  let component: SomeThingWrongComponent;
  let fixture: ComponentFixture<SomeThingWrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeThingWrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeThingWrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
