import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor() { }



  staticdeta = [{
    username:'rushi',
    password:'12345'
  },
{
  username:'ravi',
    password:'123456'
}]
getfun(){
  return this.staticdeta
}
}
