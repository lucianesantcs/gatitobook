import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePhotosComponent } from './grade-photos.component';

describe('GradePhotosComponent', () => {
  let component: GradePhotosComponent;
  let fixture: ComponentFixture<GradePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradePhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
