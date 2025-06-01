import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angulardirective } from './angulardirective';

describe('Angulardirective', () => {
  let component: Angulardirective;
  let fixture: ComponentFixture<Angulardirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Angulardirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Angulardirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
