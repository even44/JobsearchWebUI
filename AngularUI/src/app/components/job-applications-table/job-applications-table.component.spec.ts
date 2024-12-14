import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationsTableComponent } from './job-applications-table.component';

describe('JobApplicationsComponent', () => {
  let component: JobApplicationsTableComponent;
  let fixture: ComponentFixture<JobApplicationsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
