import { Component, inject, input } from '@angular/core';
import { Company } from '../../model/company.type';
import { CompanyService } from '../../services/company.service';
import { catchError } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: '[app-company-table-item]',
  imports: [RouterModule],
  templateUrl: './company-table-item.component.html',
  styleUrl: './company-table-item.component.css'
})
export class CompanyTableItemComponent {
  company = input.required<Company>();
  jobApplicationService = inject(CompanyService)

  deleteCompany(id: number){
    this.jobApplicationService.deleteCompany(id)
      .pipe(
        catchError((err) => {
          console.log(err)
          throw err;
        })
      ).subscribe(()=>{
        this.jobApplicationService.getCompanies()
      })
  }
}
