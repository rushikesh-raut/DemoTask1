import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userActive = sessionStorage.getItem('Active')
    if(userActive == 'ture'){
      return true;
    }
    else{
      alert('plese login proccsed')
    this.route.navigate(['login'])
    return false;
    }
    



  }
  constructor(private route:Router){}
}
