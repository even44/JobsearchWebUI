import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Company } from '../../model/company.type';
import { CompanyService } from '../../services/company.service';
import { catchError } from 'rxjs';
import { FilterCompaniesPipe } from "../../pipes/filter-companies.pipe";
import { CompanyTableItemComponent } from '../company-table-item/company-table-item.component';

@Component({
  selector: 'app-company-table',
  imports: [FormsModule, FilterCompaniesPipe, CompanyTableItemComponent],
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.css'
})
export class CompanyTableComponent {
	companyService = inject(CompanyService)
	
		constructor(){
			this.showCompanies()
		}
	
		companies = signal<Array<Company>>([])
		searchTerm = signal<string>("")
	
	
		
	
		showCompanies(){
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
	
	
		
	
	

			
		
		
	
	
		
}
