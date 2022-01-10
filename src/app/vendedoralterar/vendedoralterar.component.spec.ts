import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoralterarComponent } from './vendedoralterar.component';

describe('VendedoralterarComponent', () => {
  let component: VendedoralterarComponent;
  let fixture: ComponentFixture<VendedoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedoralterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
