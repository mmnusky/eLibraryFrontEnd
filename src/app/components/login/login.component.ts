import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  onSubmit() {
    this.dataService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  };

  handleResponse(data: any) {
    console.log(data);
    if (data.role == "Admin") {
      this.dataService.roleCheck(true);
    }//roleOrAdminCheck
    if (data.role == "Admin" || data.role == "Author") {
      this.dataService.roleOrAdminCheck(true);
    }
    localStorage.setItem('userRole', data.role);
    this.dataService.handle(data.token);
    this.dataService.statusUpdate(true);
    this.router.navigateByUrl('/allbooks');
  }

  handleError(error: any) {
    console.log(error);
    this.error = error.error.message;
  }
  ngOnInit() {
  }

}
