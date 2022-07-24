import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Pipe({
  name: '_imagen',
})
export class ImagePipe implements PipeTransform {

  transform( employees: Employee ): string {

    if(  employees.employee_age > 30 ) {
      return './assets/img/max30.png';
    } else if( employees.employee_age < 30) {
      return `./assets/img/min30.png`;
    } else {
      return `./assets/img/no-image`;
    }


  }
}
