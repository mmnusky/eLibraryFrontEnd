import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../Interfaces/book.model';

@Pipe({
  name: 'bookFilter'
})
export class FilterPipe implements PipeTransform {
  transform(employees: Book[], searchTerm: string): Book[] {
    if (!employees || !searchTerm) {
      return employees;
    }

    return employees.filter(employee =>
      employee.bookname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || employee.authorname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}