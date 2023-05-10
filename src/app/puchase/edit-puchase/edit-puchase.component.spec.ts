import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPuchaseComponent } from './edit-puchase.component';

describe('EditPuchaseComponent', () => {
  let component: EditPuchaseComponent;
  let fixture: ComponentFixture<EditPuchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPuchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPuchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
