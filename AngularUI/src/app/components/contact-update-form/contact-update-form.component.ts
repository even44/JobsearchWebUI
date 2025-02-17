import { Component, inject, input, signal } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact.type';
import { Company } from '../../model/company.type';
import { catchError } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-update-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-update-form.component.html',
  styleUrl: './contact-update-form.component.css'
})
export class ContactUpdateFormComponent {

  contactService = inject(ContactService)
  companyService = inject(CompanyService)
  
  router = inject(Router)

  contactId = input.required<number>()

  contact = signal<Contact | null>(null)


  ngOnInit(){
    this.contactService.getContact(this.contactId())
      .pipe(catchError((err) => {
        console.log(err)
        throw err;
      })
    ).subscribe((data) => {
      this.updateCompanies()
      this.updateContacts()
      this.contact.set(data)
      this.contactGroup.setValue(data)
      console.log("Boing")
    })
  }



    updateCompanies(){
      this.companyService.getCompanies()
    }

    updateContacts(){
      this.contactService.getContacts()
    }

     contactGroup = new FormGroup({
            ID: new FormControl(0),
            user_id: new FormControl(0),
            company_id: new FormControl(0),
            company: new FormControl(),
            name: new FormControl(''),
            email: new FormControl(``),
            phone: new FormControl(0),
          })
    onSubmit(){
      console.warn(this.contactGroup.value)
      let contact: Contact = <Contact>this.contactGroup.value
      this.contactService.updateContact(contact.ID, contact).pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe()
      this.router.navigate(['/contacts'])
    }
}
