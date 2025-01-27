import { Pipe, PipeTransform } from '@angular/core';
import { JobApplication } from '../model/job-application.type';

@Pipe({
  name: 'filterJobApplications',
  standalone: true
})
export class FilterJobApplicationsPipe implements PipeTransform {

  transform(todos: JobApplication[], searchTerm: string): JobApplication[] {
	  if (!searchTerm){
		return todos;
	}
	const text = searchTerm.toLowerCase()
	return todos.filter(todo => {
		return (
			todo.position.toLowerCase().includes(text) ||
			todo.company.name.toLowerCase().includes(text)
		);

	});
	}

}
