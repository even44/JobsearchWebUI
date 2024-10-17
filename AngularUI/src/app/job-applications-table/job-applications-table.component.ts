import { Component, effect, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
		var application: JobApplication
		for (let a in this.jobApplications) {
			if (this.jobApplications[a].id == id){
				application = this.jobApplications[a]
				this.jobApplicationService.updateJobApplication(id, application).subscribe()
			}
		}
		
		
		
		
	}
	
	checkId(jobApplication: JobApplication){
		return jobApplication.id == 1;
	}

	




	
}
