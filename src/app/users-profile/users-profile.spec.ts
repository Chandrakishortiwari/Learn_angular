import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfile } from './users-profile';

describe('UsersProfile', () => {
  let component: UsersProfile;
  let fixture: ComponentFixture<UsersProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
