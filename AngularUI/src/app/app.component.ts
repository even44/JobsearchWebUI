import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobApplicationsTableComponent } from "./job-applications-table/job-applications-table.component";
import { JobApplicationCreateComponent } from "./job-application-create/job-application-create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobApplicationsTableComponent, JobApplicationCreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularUI';
}
