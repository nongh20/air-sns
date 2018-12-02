import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateWarehouseComponent } from './add-or-update-warehouse.component';

describe('AddOrUpdateWarehouseComponent', () => {
  let component: AddOrUpdateWarehouseComponent;
  let fixture: ComponentFixture<AddOrUpdateWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
