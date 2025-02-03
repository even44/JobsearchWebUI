import { Component } from '@angular/core';
import { CompanyTableComponent } from "../../components/company-table/company-table.component";
import { CompanyCreateFormComponent } from "../../components/company-create-form/company-create-form.component";

@Component({
  selector: 'app-companies',
  imports: [CompanyTableComponent, CompanyCreateFormComponent],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {

}
