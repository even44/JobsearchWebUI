import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JobApplication } from "../../model/job-application.type";
import { JobApplicationService } from '../../services/job-application.service';
import { catchError } from 'rxjs';

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
		position: new FormControl('Position'),
		company: new FormControl('Company'),
		search_date: new FormControl('2024-10-15'),
		deadline: new FormControl('2024-10-15'),
		response: new FormControl(false),
		interview: new FormControl(false),
		done: new FormControl(false),
		link: new FormControl('https://www.finn.no'),

	})

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
