import { Pipe, PipeTransform } from '@angular/core';
import { Company } from '../model/company.type';
import { Contact } from '../model/contact.type';

@Pipe({
  name: 'filterContacts'
})
export class FilterContactsPipe implements PipeTransform {

  transform(contacts: Contact[], searchTerm: string): Contact[] {
      if (!searchTerm){
      return contacts;
    }
    const text = searchTerm.toLowerCase()
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(text) ||
        contact.company.name.toLowerCase().includes(text) ||
        contact.phone.toString().toLowerCase().includes(text) ||
        contact.email.toLowerCase().includes(text)
      );
  
    });
    }

}
