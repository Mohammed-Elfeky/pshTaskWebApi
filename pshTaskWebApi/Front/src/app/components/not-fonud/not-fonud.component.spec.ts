import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFonudComponent } from './not-fonud.component';

describe('NotFonudComponent', () => {
  let component: NotFonudComponent;
  let fixture: ComponentFixture<NotFonudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFonudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFonudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
