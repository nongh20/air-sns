import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseRegisterComponent } from './warehouse-register.component';

describe('WarehouseRegisterComponent', () => {
  let component: WarehouseRegisterComponent;
  let fixture: ComponentFixture<WarehouseRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
