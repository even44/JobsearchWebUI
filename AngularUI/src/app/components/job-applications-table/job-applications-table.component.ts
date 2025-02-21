import { Component, inject, signal } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { JobApplication } from '../../model/job-application.type';
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

	searchTerm = signal<string>("")


	

	showJobApplications(){
		this.jobApplicationService.getJobApplications()
	}


	


	getStats(event: any){
		
		var application: JobApplication
		for (let a in this.jobApplicationService.jobApplications()) {
			let id: number = Number(event.target.id)
			console.log(this.jobApplicationService.jobApplications()[a].ID == id, this.jobApplicationService.jobApplications()[a].ID, id, event.target.id)
			if (this.jobApplicationService.jobApplications()[a].ID == event.target.id){
				console.log('Field: %s Value: %s', event.target.value, event.target.checked)
				application = this.jobApplicationService.jobApplications()[a]
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
	


	




	
}
