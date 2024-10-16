import { Component, effect, input } from '@angular/core';
import { FormsModule, ValueChangeEvent } from '@angular/forms';
import { JobApplication } from '../JobApplication';
import { NgFor, NgIf } from '@angular/common';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-job-applications-table',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './job-applications-table.component.html',
  styleUrl: './job-applications-table.component.css'
})
export class JobApplicationsTableComponent {

	

	constructor(private jobApplicationService: JobApplicationService){
		this.showJobApplications()
	}

	jobApplications: JobApplication[] = []

	

	showJobApplications(){
		this.jobApplicationService.getJobApplications()
			.subscribe(data => this.jobApplications = data)
	}

	deleteJobApplication(id: number){
		this.jobApplicationService.deleteJobApplication(id)
			.subscribe()
	}
	
	updateJobApplication(id: number){
		
		
	}

	getStats(event: any){
		
		var application: JobApplication
		for (let a in this.jobApplications) {
			let id: number = Number(event.target.id)
			console.log(this.jobApplications[a].id == id, this.jobApplications[a].id, id, event.target.id)
			if (this.jobApplications[a].id == event.target.id){
				console.log('Field: %s Value: %s', event.target.value, event.target.checked)
				application = this.jobApplications[a]
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
				this.jobApplicationService.updateJobApplication(event.target.id, application).subscribe()
			}
		}
	}
	
	checkId(jobApplication: JobApplication){
		return jobApplication.id == 1;
	}

	




	
}
