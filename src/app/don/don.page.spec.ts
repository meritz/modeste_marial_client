import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonPage } from './don.page';

describe('DonPage', () => {
  let component: DonPage;
  let fixture: ComponentFixture<DonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
