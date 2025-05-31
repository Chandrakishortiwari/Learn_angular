import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Notfounpage } from './notfounpage';

describe('Notfounpage', () => {
  let component: Notfounpage;
  let fixture: ComponentFixture<Notfounpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Notfounpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Notfounpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
