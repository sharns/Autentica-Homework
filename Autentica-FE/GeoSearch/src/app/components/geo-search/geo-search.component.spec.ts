import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSearchComponent } from './geo-search.component';

describe('GeoSearchComponent', () => {
  let component: GeoSearchComponent;
  let fixture: ComponentFixture<GeoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoSearchComponent]
    });
    fixture = TestBed.createComponent(GeoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
