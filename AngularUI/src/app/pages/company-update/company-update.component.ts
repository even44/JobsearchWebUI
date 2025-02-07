import { Component, inject, Input } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { CompanyUpdateFormComponent } from "../../components/company-update-form/company-update-form.component";

@Component({
  selector: 'app-company-update',
  imports: [CompanyUpdateFormComponent],
  templateUrl: './company-update.component.html',
  styleUrl: './company-update.component.css'
})
export class CompanyUpdateComponent {
companyService = inject(CompanyService)
  companyId = 0

  @Input()
  set id(companyId: string) {
        this.companyId = Number(companyId)
  }
}
