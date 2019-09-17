import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGuestsComponent } from './section-guests.component';

describe('SectionGuestsComponent', () => {
  let component: SectionGuestsComponent;
  let fixture: ComponentFixture<SectionGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
