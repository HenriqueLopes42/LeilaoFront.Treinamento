import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradoralterarComponent } from './compradoralterar.component';

describe('CompradoralterarComponent', () => {
  let component: CompradoralterarComponent;
  let fixture: ComponentFixture<CompradoralterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompradoralterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradoralterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
