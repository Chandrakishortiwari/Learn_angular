import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seccomponent } from './seccomponent';

describe('Seccomponent', () => {
  let component: Seccomponent;
  let fixture: ComponentFixture<Seccomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seccomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seccomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
