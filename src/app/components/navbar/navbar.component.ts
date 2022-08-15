import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn!: boolean;
  public isAdmin!: boolean;
  public isAllowToAddBook!: boolean;

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.listStatusObserver.subscribe((res: any) => {
      this.loggedIn = res;
    });
    this.data.adminRoleObservable.subscribe((res: any) => {
      this.isAdmin = res;
    });
    this.data.addBookObservable.subscribe((res: any) => {
      this.isAllowToAddBook = res;
    });
  }
}
