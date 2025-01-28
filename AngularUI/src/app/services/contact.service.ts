import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Contact } from "../model/contact.type";

@Injectable({providedIn: 'root'})
export class ContactService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl


	getContacts(){
		const url = `${this.baseUrl}/auth/contacts`
		return this.http.get<Contact[]>(url)
	}
	
	getContact(id: number){
		const url = `${this.baseUrl}/auth/contacts/`
		return this.http.get<Contact>(url + id)
	}

	createContact(Contact: Contact ){
		const url = `${this.baseUrl}/auth/contacts`
		return this.http.post<Contact>(url, Contact)
	}

	deleteContact(id: number) {
		const url = `${this.baseUrl}/auth/contacts/`
		return this.http.delete<Contact>(url + id)
	}
	
	updateContact(id: number, Contact: Contact){
		const url = `${this.baseUrl}/auth/contacts/`
		return this.http.put<Contact>(url + id, Contact)
	}
}