import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Company } from "../model/company.type";

@Injectable({providedIn: 'root'})
export class CompanyService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl


	getCompanies(){
		const url = `${this.baseUrl}/auth/companies`
		return this.http.get<Company[]>(url)
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