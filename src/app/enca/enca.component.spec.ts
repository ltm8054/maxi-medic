import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncaComponent } from './enca.component';

describe('EncaComponent', () => {
  let component: EncaComponent;
  let fixture: ComponentFixture<EncaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
