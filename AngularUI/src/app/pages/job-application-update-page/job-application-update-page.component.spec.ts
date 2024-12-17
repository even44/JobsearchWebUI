import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationUpdatePageComponent } from './job-application-update-page.component';

describe('JobApplicationUpdatePageComponent', () => {
  let component: JobApplicationUpdatePageComponent;
  let fixture: ComponentFixture<JobApplicationUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
