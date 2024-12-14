import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationTableItemComponent } from './job-application-table-item.component';

describe('JobApplicationTableItemComponent', () => {
  let component: JobApplicationTableItemComponent;
  let fixture: ComponentFixture<JobApplicationTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApplicationTableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApplicationTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
