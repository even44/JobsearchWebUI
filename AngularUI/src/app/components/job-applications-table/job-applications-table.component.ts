import { Component, effect, inject, input, signal } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { JobApplication } from '../../model/job-application.type';
import { NgFor, NgIf } from '@angular/common';
import { JobApplicationService } from '../../services/job-application.service';
import { JobApplicationTableItemComponent } from "../job-application-table-item/job-application-table-item.component";
import { FilterJobApplicationsPipe } from '../../pipes/filter-job-applications.pipe';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-job-applications-table',
  standalone: true,
  imports: [FormsModule, JobApplicationTableItemComponent, FilterJobApplicationsPipe],
  templateUrl: './job-applications-table.component.html',
  styleUrl: './job-applications-table.component.css'
})
export class JobApplicationsTableComponent {

	
	jobApplicationService = inject(JobApplicationService)

	constructor(){
		this.showJobApplications()
	}

	jobApplications = signal<Array<JobApplication>>([])
	searchTerm = signal<string>("")


	

	showJobApplications(){
		this.jobApplicationService.getJobApplications()
		.pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe(data => {
			this.jobApplications.set(data)
			console.log(this.jobApplications())
		})
	}


	


	getStats(event: any){
		
		var application: JobApplication
		for (let a in this.jobApplications()) {
			let id: number = Number(event.target.id)
			console.log(this.jobApplications()[a].ID == id, this.jobApplications()[a].ID, id, event.target.id)
			if (this.jobApplications()[a].ID == event.target.id){
				console.log('Field: %s Value: %s', event.target.value, event.target.checked)
				application = this.jobApplications()[a]
				if (event.target.value == "response") {
					application.response = event.target.checked
				}
				else if (event.target.value == "interview") {
					application.interview = event.target.checked
				}
				else if (event.target.value == "done") {
					application.done = event.target.checked
				}
				console.log('Field: %s Value: %s', event.target.value, event.target.checked)
				this.jobApplicationService.updateJobApplication(event.target.id, application).pipe(
							catchError((err) => {
								console.log(err)
								throw err;
							})
						).subscribe(res => {
					this.showJobApplications()
				}
					
				)
			}
		}
	}
	
	checkId(jobApplication: JobApplication){
		return jobApplication.ID == 1;
	}

	




	
}
