import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicacesPage } from './dedicaces.page';

describe('DedicacesPage', () => {
  let component: DedicacesPage;
  let fixture: ComponentFixture<DedicacesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicacesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DedicacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
