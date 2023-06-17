import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../services/Shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ciudadControl = new FormControl('');

  constructor(private dataService: DataService) { }


  actualizarCiudad(event: Event) {
    event.preventDefault();
    this.dataService.actualizarCiudad(this.ciudadControl.value)
    this.dataService.emitirEvento();
  }
}
