import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorListarComponent } from './comprador-listar.component';

describe('CompradorListarComponent', () => {
  let component: CompradorListarComponent;
  let fixture: ComponentFixture<CompradorListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradorListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
