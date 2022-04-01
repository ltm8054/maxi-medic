import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarcontraComponent } from './actualizarcontra.component';

describe('ActualizarcontraComponent', () => {
  let component: ActualizarcontraComponent;
  let fixture: ComponentFixture<ActualizarcontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarcontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarcontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
