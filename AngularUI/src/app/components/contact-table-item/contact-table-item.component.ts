import { Component, inject, input } from '@angular/core';
import { Contact } from '../../model/contact.type';
import { ContactService } from '../../services/contact.service';
import { catchError } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: '[app-contact-table-item]',
  imports: [RouterModule],
  templateUrl: './contact-table-item.component.html',
  styleUrl: './contact-table-item.component.css'
})
export class ContactTableItemComponent {
  contact = input.required<Contact>();
  contactService = inject(ContactService)

  deleteContact(id: number){
    this.contactService.deleteContact(id)
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe()
  }
}
