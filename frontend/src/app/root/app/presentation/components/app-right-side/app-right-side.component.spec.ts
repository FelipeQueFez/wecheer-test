import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRightSideComponent } from './app-right-side.component';

describe('AppRightSideComponent', () => {
  let component: AppRightSideComponent;
  let fixture: ComponentFixture<AppRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppRightSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
