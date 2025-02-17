import { Component, inject, input, signal } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobApplication } from '../../model/job-application.type';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { ContactService } from '../../services/contact.service';
import { Company } from '../../model/company.type';
import { Contact } from '../../model/contact.type';

@Component({
  selector: 'app-job-application-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-application-update.component.html',
  styleUrl: './job-application-update.component.css'
})
export class JobApplicationUpdateComponent {
    jobApplicationService = inject(JobApplicationService)
    companyService = inject(CompanyService)
    contactService = inject(ContactService)
    router = inject(Router)
    
    jobApplicationId = input.required<number>()

    jobApplication = signal<JobApplication | null>(null)




    ngOnInit(){
      this.jobApplicationService.getJobApplication(this.jobApplicationId())
        .pipe(catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe((data) => {
        this.updateCompanies()
        this.updateContacts()
        this.jobApplication.set(data)
        this.jobApplicationGroup.setValue(data)
      })
    }


  
    updateCompanies(){
      this.companyService.getCompanies()
    }
  
    updateContacts(){
      this.contactService.getContacts()
    }

      jobApplicationGroup = new FormGroup({
        ID: new FormControl(0),
        user_id: new FormControl(0),
        position: new FormControl(''),
        company_id: new FormControl(0),
        company: new FormControl(),
        contact: new FormControl(),
        search_date: new FormControl(``),
        deadline: new FormControl(``),
        response: new FormControl(false),
        interview: new FormControl(false),
        done: new FormControl(false),
        link: new FormControl(''),
        contact_id: new FormControl(0),
      })
    
      onSubmit(){
        console.warn(this.jobApplicationGroup.value)
        let jobApplication: JobApplication = <JobApplication>this.jobApplicationGroup.value
        this.jobApplicationService.updateJobApplication(jobApplication.ID,jobApplication).pipe(
                      catchError((err) => {
                        console.log(err)
                        throw err;
                      })
                    ).subscribe()
        this.router.navigate(['/applications'])
      }
}
