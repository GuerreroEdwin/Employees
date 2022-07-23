import { Component, Input } from '@angular/core';
import { Employee } from '../../interfaces/employee.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent {

  @Input() res!: Employee;

}
