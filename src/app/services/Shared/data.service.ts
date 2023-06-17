import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ciudadSource = new BehaviorSubject<string | null>(null);
  ciudad$ = this.ciudadSource.asObservable();

  private searchEvent = new Subject<void>();
  searchEvent$ = this.searchEvent.asObservable();

  constructor() { }

  actualizarCiudad(ciudad: string | null) {
    const ciudadValue = ciudad || ''
    this.ciudadSource.next(ciudadValue);
  }

  emitirEvento() {
    this.searchEvent.next()
  }

}
