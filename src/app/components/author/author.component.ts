import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeactivateAuthor } from 'src/app/Interfaces/deactivate-author.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors: any = [];
  authorEmail!: DeactivateAuthor;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAuthorsData();
  }
  changeStatus(email: any) {
    console.log(email);
    this.authorEmail = {
      email: email,
    }
    this.dataService.changestatus(this.authorEmail).subscribe({
      next: (res) => {
        //alert("Author deactivated successfully");
        this.getAuthorsData();
      },
      error: (err) => {
        console.log(err);
        alert("Error while de-activating the author");
      }

    });
  }
  getAuthorsData() {

    this.dataService.getAllAuthors().subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    console.log(data);
    this.authors = data;
  }

  handleError(error: any): void {
    console.log(error.error.message);
  }
}