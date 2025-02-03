import { Component, inject, signal } from '@angular/core';
import { Company } from '../../model/company.type';
import { Contact } from '../../model/contact.type';
import { ContactService } from '../../services/contact.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-contact-create-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-create-form.component.html',
  styleUrl: './contact-create-form.component.css'
})
export class ContactCreateFormComponent {

  contactService = inject(ContactService)
  companyService = inject(CompanyService)

  companies = signal<Array<Company>>([])
  contacts = signal<Array<Contact>>([])

  contactGroup = new FormGroup({
        ID: new FormControl(0),
        user_id: new FormControl(0),
        company_id: new FormControl(0),
        name: new FormControl(''),
        email: new FormControl(``),
        phone: new FormControl(0),
      })

      ngOnInit(){
        this.updateCompanies()
        this.updateContacts()
        }
    
      updateCompanies(){
        this.companyService.getCompanies()
        .pipe(
          catchError((err) => {
            console.log(err)
            throw err;
          })
        ).subscribe(data => {
          this.companies.set(data)
          console.log(this.companies())
        })
      }
    
      updateContacts(){
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


  onSubmit(){
    console.warn(this.contactGroup.value)
    let contact: Contact = <Contact>this.contactGroup.value
    this.contactService.createContact(contact).pipe(
                  catchError((err) => {
                    console.log(err)
                    throw err;
                  })
                ).subscribe()
  }

}
