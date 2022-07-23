import { Component } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: []
})
export class BuscarComponent {

  // termino: string  = '';
  // res!: Employee[];
  // employeeSeleccionado: Employee| undefined;

  // constructor( private employeeService: EmployeeService ) { }

  // ngOnInit(): void {
  // }

  // buscando() {

  //   this.employeeService.getSugerencias( this.termino.trim() )
  //     .subscribe( heroes => this.heroes = heroes );

  // }

  // opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

  //   if(!event.option.value) {
  //     this.heroeSeleccionado = undefined;
  //     return;
  //   }

  //   const heroe: Heroe = event.option.value;
  //   this.termino = heroe.superhero;

  //   this.employeeService.getEmployeePorId( heroe.id! )
  //     .subscribe( heroe => this.heroeSeleccionado = heroe );
  // }

}
