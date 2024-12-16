import { Component, inject, Input, signal } from '@angular/core';
import { JobApplicationService } from '../../services/job-application.service';
import { JobApplication } from '../../model/job-application.type';
import { catchError } from 'rxjs';
import { JobApplicationUpdateComponent } from "../../components/job-application-update/job-application-update.component";

@Component({
  selector: 'app-job-application-update-page',
  standalone: true,
  imports: [JobApplicationUpdateComponent],
  templateUrl: './job-application-update-page.component.html',
  styleUrl: './job-application-update-page.component.css',
})
export class JobApplicationUpdatePageComponent {
  jobApplicationService = inject(JobApplicationService)
  jobApplicationId = 0

  @Input()
  set id(jobAppId: string) {
        this.jobApplicationId = Number(jobAppId)
  }

  
}
