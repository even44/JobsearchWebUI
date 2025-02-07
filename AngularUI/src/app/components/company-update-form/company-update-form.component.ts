import { Component, inject, input, signal } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { CompanyService } from '../../services/company.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact.type';
import { Company } from '../../model/company.type';
import { catchError } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-update-form',
  imports: [ReactiveFormsModule],
  templateUrl: './company-update-form.component.html',
  styleUrl: './company-update-form.component.css'
})
export class CompanyUpdateFormComponent {
  contactService = inject(ContactService)
  companyService = inject(CompanyService)
  
  router = inject(Router)

  companyId = input.required<number>()

  company = signal<Company | null>(null)
  companies = signal<Array<Company>>([])
  contacts = signal<Array<Contact>>([])

  ngOnInit(){
    this.companyService.getCompany(this.companyId())
      .pipe(catchError((err) => {
        console.log(err)
        throw err;
      })
    ).subscribe((data) => {
      this.updateCompanies()
      this.updateContacts()
      this.company.set(data)
      this.companyGroup.setValue(data)
      console.log("Boing")
    })
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

    companyGroup = new FormGroup({
      ID: new FormControl(0),
      user_id: new FormControl(0),
      name: new FormControl(''),
      location: new FormControl(``),
      status: new FormControl(``),
      notes: new FormControl(``),
      website: new FormControl(``),
      contacts: new FormControl()
    })
    onSubmit(){
      console.warn(this.companyGroup.value)
      let company: Company = <Company>this.companyGroup.value
      this.companyService.updateCompany(company.ID, company).pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe(() => {
        this.router.navigate(['/companies'])
      })
      
    }
}
