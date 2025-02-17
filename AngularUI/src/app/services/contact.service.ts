import { inject, Injectable, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Contact } from "../model/contact.type";
import { catchError } from "rxjs";

@Injectable({providedIn: 'root'})
export class ContactService {

	http = inject(HttpClient)
	baseUrl = environment.apiUrl

	contacts = signal<Array<Contact>>([])

	getContacts(){
		const url = `${this.baseUrl}/auth/contacts`
		this.http.get<Contact[]>(url).pipe(
			catchError((err) => {
				console.log(err)
				throw err;
			})
				).subscribe(data => {
					this.contacts.set(data)
					console.log(this.contacts())
				})
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