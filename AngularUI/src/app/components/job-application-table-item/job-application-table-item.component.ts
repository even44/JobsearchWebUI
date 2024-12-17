import { Component, inject, input, signal } from '@angular/core';
import { JobApplication } from '../../model/job-application.type';
import { JobApplicationService } from '../../services/job-application.service';
import { catchError } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: '[app-job-application-table-item]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-application-table-item.component.html',
  styleUrl: './job-application-table-item.component.css'
})
export class JobApplicationTableItemComponent {
	jobApplication = input.required<JobApplication>();
	jobApplicationService = inject(JobApplicationService)

	deleteJobApplication(id: number){
		this.jobApplicationService.deleteJobApplication(id)
			.pipe(
				catchError((err) => {
					console.log(err)
					throw err;
				})
			).subscribe()
	}

	responseClicked() {
		this.jobApplication().response = !this.jobApplication().response
		this.jobApplicationService.updateJobApplication(this.jobApplication().id, this.jobApplication()).pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe()
	}

	interviewClicked(){
		this.jobApplication().interview = !this.jobApplication().interview
		this.jobApplicationService.updateJobApplication(this.jobApplication().id, this.jobApplication()).pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe()
	}

	doneClicked(){
		this.jobApplication().done = !this.jobApplication().done
		this.jobApplicationService.updateJobApplication(this.jobApplication().id, this.jobApplication()).pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
		).subscribe()
	}
}
