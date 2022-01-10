import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoListarComponent } from './leilao-listar.component';

describe('LeilaoListarComponent', () => {
  let component: LeilaoListarComponent;
  let fixture: ComponentFixture<LeilaoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
