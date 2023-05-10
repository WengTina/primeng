import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuchaseComponent } from './puchase.component';

describe('PuchaseComponent', () => {
  let component: PuchaseComponent;
  let fixture: ComponentFixture<PuchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
