import { Component } from '@angular/core';
import { CompanyTableComponent } from "../../components/company-table/company-table.component";
import { ContactCreateFormComponent } from "../../components/contact-create-form/contact-create-form.component";
import { ContactTableComponent } from "../../components/contact-table/contact-table.component";

@Component({
  selector: 'app-contacts',
  imports: [ContactCreateFormComponent, ContactTableComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
