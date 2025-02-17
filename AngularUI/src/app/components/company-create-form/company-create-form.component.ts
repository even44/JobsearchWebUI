import { Component, inject, signal } from '@angular/core';
import { Company } from '../../model/company.type';
import { Contact } from '../../model/contact.type';
import { ContactService } from '../../services/contact.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from '../../services/company.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-company-create-form',
  imports: [ReactiveFormsModule],
  templateUrl: './company-create-form.component.html',
  styleUrl: './company-create-form.component.css'
})
export class CompanyCreateFormComponent {

  companyService = inject(CompanyService)

  companies = signal<Array<Company>>([])
  contacts = signal<Array<Contact>>([])

  companyGroup = new FormGroup({
        ID: new FormControl(0),
        user_id: new FormControl(0),
        name: new FormControl(''),
        location: new FormControl(``),
        status: new FormControl(``),
        notes: new FormControl(``),
        website: new FormControl(``),
      })

  onSubmit(){
    console.warn(this.companyGroup.value)
    let company: Company = <Company>this.companyGroup.value
    this.companyService.createCompany(company).pipe(
                  catchError((err) => {
                    console.log(err)
                    throw err;
                  })
                ).subscribe(() => {
                  this.companyService.getCompanies()
                })
  }

}
