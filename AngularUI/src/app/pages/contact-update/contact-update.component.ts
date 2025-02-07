import { Component, inject, Input } from '@angular/core';
import { ContactUpdateFormComponent } from "../../components/contact-update-form/contact-update-form.component";
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-update',
  imports: [ContactUpdateFormComponent],
  templateUrl: './contact-update.component.html',
  styleUrl: './contact-update.component.css'
})
export class ContactUpdateComponent {
contactService = inject(ContactService)
  contactId = 0

  @Input()
  set id(contactId: string) {
        this.contactId = Number(contactId)
  }
}
