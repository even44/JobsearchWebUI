import { inject, Injectable, signal } from "@angular/core";
import { JobApplication } from "../model/job-application.type";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class JobApplicationService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl

	jobApplications = signal<Array<JobApplication>>([])

	getJobApplications(){
		const url = `${this.baseUrl}/auth/jobapplications`
		this.http.get<JobApplication[]>(url).pipe(
					catchError((err) => {
						console.log(err)
						throw err;
					})
				).subscribe(data => {
					this.jobApplications.set(data)
					console.log(this.jobApplications())
				})
	}
	
	getJobApplication(id: number){
		const url = `${this.baseUrl}/auth/jobapplications/`
		return this.http.get<JobApplication>(url + id)
	}

	createJobApplication(application: JobApplication ){
		const url = `${this.baseUrl}/auth/jobapplications`
		return this.http.post<JobApplication>(url, application)
	}

	deleteJobApplication(id: number) {
		const url = `${this.baseUrl}/auth/jobapplications/`
		return this.http.delete<JobApplication>(url + id)
	}
	
	updateJobApplication(id: number, application: JobApplication){
		const url = `${this.baseUrl}/auth/jobapplications/`
		return this.http.put<JobApplication>(url + id, application)
	}
}