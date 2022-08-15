import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
enum Role {
  Admin = 'Admin',
  Author = 'Author'
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  public form = {
    email: null,
    firstname: null,
    lastname: null,
    role: null,
    password: null,
    confirmpassword: null
  };
  userRole = Role;
  role: string = "";
  signUpForm !: FormGroup;
  public error: any = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) { }
  // ngOnInit(): void {
  //   this.signUpForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     firstname: ['', Validators.required],
  //     lastname: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmpassword: ['', Validators.required],
  //   })
  //}
  onSubmit() {
    console.log(this.form);
    this.dataService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    console.log("Success");
    //this.dataService.handle(data.access_token);
    this.router.navigateByUrl('/login');
  }

  handleError(error: any) {
    console.log("Fail");
    console.log(error.error.errors);
    alert("Registration Failed");
  }

  ngOnInit() {
  }
}
