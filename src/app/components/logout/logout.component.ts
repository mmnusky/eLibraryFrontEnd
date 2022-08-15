import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('userRole');

    this.dataService.statusUpdate(false);
    //this.router.navigateByUrl("/navbarload");
    this.router.navigateByUrl("/login");


  }

}
