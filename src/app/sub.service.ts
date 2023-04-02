import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  constructor() { 
  
}
username = new BehaviorSubject<any>('raut')

}


