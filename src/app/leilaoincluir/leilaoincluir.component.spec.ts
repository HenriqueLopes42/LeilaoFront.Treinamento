import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoincluirComponent } from './leilaoincluir.component';

describe('LeilaoincluirComponent', () => {
  let component: LeilaoincluirComponent;
  let fixture: ComponentFixture<LeilaoincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
