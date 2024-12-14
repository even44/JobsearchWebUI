import { Component, signal } from '@angular/core';
import { JobApplicationsTableComponent } from "../components/job-applications-table/job-applications-table.component";
import { JobApplicationCreateComponent } from "../components/job-application-create/job-application-create.component";
import { GreetingComponent } from "../components/greeting/greeting.component";
import { CounterComponent } from "../components/counter/counter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JobApplicationsTableComponent, JobApplicationCreateComponent, GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
	homeMessage = signal("Få deg jobb! Søk noen jobber!")

	keyUpHandler(event: KeyboardEvent){
		console.log(`user typed ${event.key} in the input`)
	}
}
