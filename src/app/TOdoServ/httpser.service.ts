import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserService {

  constructor(private Api:HttpClient) { }


    // Curd Opration.........
    
  postdeta(obj:any)
  {
    return this.Api.post('http://localhost:3000/List',obj)
  }

  acceptdeta()
{
  return this.Api.get('http://localhost:3000/List')
}

 updatedeta(id:any ,obj:any)
 {
return this.Api.put('http://localhost:3000/List/'+id,obj)
 }

 deletedeta(id:any)
 {
  return this.Api.delete('http://localhost:3000/List/'+id)
 }

}

