import { Injectable } from "@angular/core";
import { JobApplication } from "./JobApplication";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class JobApplicationService {

	constructor(private httpClient: HttpClient) {}


	getJobApplications(){
		return this.httpClient.get<JobApplication[]>("http://localhost:3001/jobapplications")
	}

	createJobApplication(application: JobApplication ){
		return this.httpClient.post<JobApplication>("http://localhost:3001/jobapplications", application)
	}

	deleteJobApplication(id: number) {
		return this.httpClient.delete<JobApplication>("http://localhost:3001/jobapplications/" + id)
	}
	
	updateJobApplication(id: number, application: JobApplication){
		return this.httpClient.put<JobApplication>("https://localhost:3001/jobapplications/" + id, application)
	}
}