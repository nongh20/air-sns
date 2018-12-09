import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseLatestComponent } from './warehouse-latest.component';

describe('WarehouseLatestComponent', () => {
  let component: WarehouseLatestComponent;
  let fixture: ComponentFixture<WarehouseLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
