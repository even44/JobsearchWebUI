import { inject, Injectable } from "@angular/core";
import { JobApplication } from "../model/job-application.type";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class JobApplicationService {

	http = inject(HttpClient)
	baseUrl = `http://kornelius.lan:3001`


	getJobApplications(){
		const url = `${this.baseUrl}/jobapplications`
		return this.http.get<JobApplication[]>(url)
	}
	
	getJobApplication(id: number){
		const url = `${this.baseUrl}/jobapplications/${id}`
		return this.http.get<JobApplication>(url)
	}

	createJobApplication(application: JobApplication ){
		const url = `${this.baseUrl}/jobapplications`
		return this.http.post<JobApplication>(url, application)
	}

	deleteJobApplication(id: number) {
		const url = `${this.baseUrl}/jobapplications/`
		return this.http.delete<JobApplication>(url + id)
	}
	
	updateJobApplication(id: number, application: JobApplication){
		const url = `${this.baseUrl}/jobapplications/`
		return this.http.put<JobApplication>(url + id, application)
	}
}