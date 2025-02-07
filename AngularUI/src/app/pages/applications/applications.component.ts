import { Component, inject } from '@angular/core';
import { JobApplicationCreateComponent } from '../../components/job-application-create/job-application-create.component';
import { JobApplicationsTableComponent } from '../../components/job-applications-table/job-applications-table.component';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [JobApplicationCreateComponent, JobApplicationsTableComponent],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent {

  router = inject(Router)
  userService = inject(UserService)

  ngOnInit(){
    if (this.userService.userData == null) {
      this.router.navigate(["/login"])
    }
  }

}
