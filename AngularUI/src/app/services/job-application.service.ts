import { inject, Injectable } from "@angular/core";
import { JobApplication } from "../model/job-application.type";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class JobApplicationService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl


	getJobApplications(){
		const url = `${this.baseUrl}/auth/jobapplications`
		return this.http.get<JobApplication[]>(url)
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