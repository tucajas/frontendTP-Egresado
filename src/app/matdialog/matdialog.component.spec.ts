import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatdialogComponent } from './matdialog.component';

describe('MatdialogComponent', () => {
  let component: MatdialogComponent;
  let fixture: ComponentFixture<MatdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatdialogComponent]
    });
    fixture = TestBed.createComponent(MatdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
