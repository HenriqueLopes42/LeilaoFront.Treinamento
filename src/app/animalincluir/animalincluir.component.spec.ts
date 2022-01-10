import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalincluirComponent } from './animalincluir.component';

describe('AnimalincluirComponent', () => {
  let component: AnimalincluirComponent;
  let fixture: ComponentFixture<AnimalincluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalincluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalincluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
