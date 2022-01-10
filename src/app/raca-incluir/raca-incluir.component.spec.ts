import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaIncluirComponent } from './raca-incluir.component';

describe('RacaIncluirComponent', () => {
  let component: RacaIncluirComponent;
  let fixture: ComponentFixture<RacaIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
