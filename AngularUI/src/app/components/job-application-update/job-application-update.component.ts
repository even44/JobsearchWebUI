import { Component, inject, input } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobApplication } from '../../model/job-application.type';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-application-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-application-update.component.html',
  styleUrl: './job-application-update.component.css'
})
export class JobApplicationUpdateComponent {
    jobApplicationService = inject(JobApplicationService)
    router = inject(Router)
    jobApplicationId = input.required<number>()

    ngOnInit(){
      this.jobApplicationService.getJobApplication(this.jobApplicationId())
        .pipe(catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe((data) => {
        this.jobApplicationGroup.setValue(data)
      })
    }

  

      jobApplicationGroup = new FormGroup({
        id: new FormControl(0),
        position: new FormControl(''),
        company: new FormControl(''),
        search_date: new FormControl(''),
        deadline: new FormControl(''),
        response: new FormControl(false),
        interview: new FormControl(false),
        done: new FormControl(false),
        link: new FormControl(''),
    
      })
    
      onSubmit(){
        console.warn(this.jobApplicationGroup.value)
        let jobApplication: JobApplication = <JobApplication>this.jobApplicationGroup.value
        this.jobApplicationService.updateJobApplication(jobApplication.id,jobApplication).pipe(
                      catchError((err) => {
                        console.log(err)
                        throw err;
                      })
                    ).subscribe()
        this.router.navigate(['/'])
      }
}
