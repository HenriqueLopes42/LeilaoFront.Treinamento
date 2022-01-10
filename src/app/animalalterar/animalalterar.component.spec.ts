import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalalterarComponent } from './animalalterar.component';

describe('AnimalalterarComponent', () => {
  let component: AnimalalterarComponent;
  let fixture: ComponentFixture<AnimalalterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalalterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalalterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
