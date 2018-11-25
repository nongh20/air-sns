import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warehouse.RegisterComponent } from './warehouse.register.component';

describe('Warehouse.RegisterComponent', () => {
  let component: Warehouse.RegisterComponent;
  let fixture: ComponentFixture<Warehouse.RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warehouse.RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warehouse.RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
