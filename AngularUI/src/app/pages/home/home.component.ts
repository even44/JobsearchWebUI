import { Component, inject, signal } from '@angular/core';
import { JobApplicationsTableComponent } from "../../components/job-applications-table/job-applications-table.component";
import { JobApplicationCreateComponent } from "../../components/job-application-create/job-application-create.component";
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { GreetingComponent } from "../../components/greeting/greeting.component";
import { CounterComponent } from "../../components/counter/counter.component";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	
  userService = inject(UserService)

}
