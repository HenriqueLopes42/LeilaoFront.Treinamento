import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoincluirComponent } from './medicoincluir.component';

describe('MedicoincluirComponent', () => {
  let component: MedicoincluirComponent;
  let fixture: ComponentFixture<MedicoincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
