import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeilaoalterarComponent } from './leilaoalterar.component';

describe('LeilaoalterarComponent', () => {
  let component: LeilaoalterarComponent;
  let fixture: ComponentFixture<LeilaoalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeilaoalterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeilaoalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
