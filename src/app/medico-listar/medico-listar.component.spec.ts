import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListarComponent } from './medico-listar.component';

describe('MedicoListarComponent', () => {
  let component: MedicoListarComponent;
  let fixture: ComponentFixture<MedicoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
