import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobApplication } from "../../model/job-application.type";
import { JobApplicationService } from '../../services/job-application.service';
import { catchError } from 'rxjs';
import { Company } from '../../model/company.type';
import { CompanyService } from '../../services/company.service';
import { Contact } from '../../model/contact.type';
import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-job-application-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-application-create.component.html',
  styleUrl: './job-application-create.component.css'
})
export class JobApplicationCreateComponent {
	constructor(private jobApplicationService: JobApplicationService){}

	companyService = inject(CompanyService)
	contactService = inject(ContactService)

	companies = signal<Array<Company>>([])
	contacts = signal<Array<Contact>>([])

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

	  ngOnInit(){
		this.updateCompanies()
		this.updateContacts()
	  }

	updateCompanies(){
		this.companyService.getCompanies()
		.pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe(data => {
			this.companies.set(data)
			console.log(this.companies())
		})
	}

	updateContacts(){
		this.contactService.getContacts()
		.pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe(data => {
			this.contacts.set(data)
			console.log(this.contacts())
		})
	}


	onSubmit(){
		console.warn(this.jobApplicationGroup.value)
		let jobApplication: JobApplication = <JobApplication>this.jobApplicationGroup.value
		this.jobApplicationService.createJobApplication(jobApplication).pipe(
									catchError((err) => {
										console.log(err)
										throw err;
									})
								).subscribe()
	}
}
