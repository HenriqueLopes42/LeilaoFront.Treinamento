import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListarComponent } from './animal-listar.component';

describe('AnimalListarComponent', () => {
  let component: AnimalListarComponent;
  let fixture: ComponentFixture<AnimalListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
