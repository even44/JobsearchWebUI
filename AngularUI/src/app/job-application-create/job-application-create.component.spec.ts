import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationCreateComponent } from './job-application-create.component';

describe('JobApplicationCreateComponent', () => {
  let component: JobApplicationCreateComponent;
  let fixture: ComponentFixture<JobApplicationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
