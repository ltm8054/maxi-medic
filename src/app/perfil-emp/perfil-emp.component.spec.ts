import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEmpComponent } from './perfil-emp.component';

describe('PerfilEmpComponent', () => {
  let component: PerfilEmpComponent;
  let fixture: ComponentFixture<PerfilEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
