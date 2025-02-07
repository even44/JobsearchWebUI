import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../model/company.type';

@Pipe({
  name: 'filterCompanies'
})
export class FilterCompaniesPipe implements PipeTransform {

  transform(companies: Company[], searchTerm: string): Company[] {
      if (!searchTerm){
      return companies;
    }
    const text = searchTerm.toLowerCase()
    return companies.filter(todo => {
      return (
        todo.name.toLowerCase().includes(text) ||
        todo.location.toLowerCase().includes(text) ||
        todo.notes.toLowerCase().includes(text) ||
        todo.status.toLowerCase().includes(text)
      );
  
    });
    }

}
