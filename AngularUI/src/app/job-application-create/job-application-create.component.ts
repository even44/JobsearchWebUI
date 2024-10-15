import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobApplication } from "../JobApplication";
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-job-application-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './job-application-create.component.html',
  styleUrl: './job-application-create.component.css'
})
export class JobApplicationCreateComponent {
	constructor(private jobApplicationService: JobApplicationService){}

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
		this.jobApplicationService.createJobApplication(jobApplication).subscribe()
		

	}
}
