import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridWarehouseComponent } from './grid-warehouse.component';

describe('GridWarehouseComponent', () => {
  let component: GridWarehouseComponent;
  let fixture: ComponentFixture<GridWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
