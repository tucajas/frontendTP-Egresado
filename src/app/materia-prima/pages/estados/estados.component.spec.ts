import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosComponent } from './estados.component';

describe('EstadosComponent', () => {
  let component: EstadosComponent;
  let fixture: ComponentFixture<EstadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosComponent]
    });
    fixture = TestBed.createComponent(EstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
