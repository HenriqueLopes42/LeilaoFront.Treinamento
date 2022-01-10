import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaListarComponent } from './raca-listar.component';

describe('RacaListarComponent', () => {
  let component: RacaListarComponent;
  let fixture: ComponentFixture<RacaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
