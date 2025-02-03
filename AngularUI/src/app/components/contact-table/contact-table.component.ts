import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { catchError } from 'rxjs';
import { Contact } from '../../model/contact.type';
import { ContactService } from '../../services/contact.service';
import { FilterContactsPipe } from '../../pipes/filter-contacts.pipe';
import { ContactTableItemComponent } from '../contact-table-item/contact-table-item.component';

@Component({
  selector: 'app-contact-table',
  imports: [FormsModule, FilterContactsPipe, ContactTableItemComponent],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css'
})
export class ContactTableComponent {
	contactService = inject(ContactService)
	
		constructor(){
			this.showContacts()
		}
	
		contacts = signal<Array<Contact>>([])
		searchTerm = signal<string>("")
	
	
		
	
		showContacts(){
			this.contactService.getContacts()
			.pipe(
				catchError((err) => {
					console.log(err)
					throw err;
				})
			).subscribe(data => {
				this.contacts.set(data)
				console.log(this.contacts())
			})
		}
	
	
		
	
	

			
		
		
	
	
		
}
