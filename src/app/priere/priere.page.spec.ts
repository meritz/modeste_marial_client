import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrierePage } from './priere.page';

describe('PrierePage', () => {
  let component: PrierePage;
  let fixture: ComponentFixture<PrierePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrierePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrierePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
