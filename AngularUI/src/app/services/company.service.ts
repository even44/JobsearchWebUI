import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Company } from "../model/company.type";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class CompanyService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl

	companies = signal<Array<Company>>([])

	getCompanies(){
		const url = `${this.baseUrl}/auth/companies`
		this.http.get<Company[]>(url).pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
				).subscribe(data => {
					this.companies.set(data)
					console.log(this.companies())
				})
	}
	
	getCompany(id: number){
		const url = `${this.baseUrl}/auth/companies/`
		return this.http.get<Company>(url + id)
	}

	createCompany(company: Company ){
		const url = `${this.baseUrl}/auth/companies`
		return this.http.post<Company>(url, company)
	}

	deleteCompany(id: number) {
		const url = `${this.baseUrl}/auth/companies/`
		return this.http.delete<Company>(url + id)
	}
	
	updateCompany(id: number, company: Company){
		const url = `${this.baseUrl}/auth/companies/`
		return this.http.put<Company>(url + id, company)
	}
}