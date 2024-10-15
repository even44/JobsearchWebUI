import { Component } from '@angular/core';
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

	constructor(private jobApplicationService: JobApplicationService){}

	showJobApplication(){
		this.jobApplicationService.getJobApplications()
			.subscribe(data => this.jobApplications = data)
	}



	application1: JobApplication = {
		id: 0,
		position: 'Engineer',
		company: 'Datapass AS',
		search_date: '11/10/2024',
		deadline: '15/10/2024',
		response: false,
		interview: false,
		done: false,
		link: "https://www.finn.no"

	}


	jobApplications = [this.application1]
}
