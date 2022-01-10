import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoexcluirComponent } from './leilaoexcluir.component';

describe('LeilaoexcluirComponent', () => {
  let component: LeilaoexcluirComponent;
  let fixture: ComponentFixture<LeilaoexcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoexcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoexcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
