import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  send = new Subject<any>();
  resource : any;

  constructor() { }
}
