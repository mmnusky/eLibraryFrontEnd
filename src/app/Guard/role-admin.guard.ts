import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAdminGuard implements CanActivate {
  constructor(private dataService: DataService, private route: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('userRole') == "Admin") {
      return true;

    }
    else {
      alert("You are not authorize to access this route");
      this.route.navigate(["/allbooks"]);
      return false;
    }

  }
}