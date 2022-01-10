import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorIncluirComponent } from './comprador-incluir.component';

describe('CompradorIncluirComponent', () => {
  let component: CompradorIncluirComponent;
  let fixture: ComponentFixture<CompradorIncluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorIncluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorIncluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
