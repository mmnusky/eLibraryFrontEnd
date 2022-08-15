
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book } from 'src/app/Interfaces/book.model';
import { BookToCreate } from 'src/app/Interfaces/bookToCreate.model';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  isCreate: boolean = false;
  bookname: string = "";
  author: string = "";
  authorname: string = "";
  bookid!: number;
  book!: BookToCreate;
  authorsList: any = [];
  books: Book[] = [];
  response!: { dbPath: ''; };

  constructor(private http: HttpClient, private service: DataService, private router: Router) { }

  ngOnInit() {
    this.isCreate = true;
    this.getAllActiveAuthors()
  }

  onCreate = () => {
    this.book = {
      bookname: this.bookname,
      authorname: this.authorname,
      imgPath: this.response.dbPath
    }
    console.log(this.book);
    this.service.insertBookData(this.book)
      .subscribe({
        next: _ => {
          console.log("insert successfully")
          this.router.navigateByUrl('/allbooks');
          console.log("get successfully")
          this.isCreate = false;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }

  // private getUsers = () => {
  //   this.service.getAllBook()
  //     .subscribe({
  //       next: (res) => this.books = res as Book[],
  //       error: (err: HttpErrorResponse) => console.log(err)
  //     });
  // }

  returnToCreate = () => {
    this.isCreate = true;
    this.bookname = '';
    this.authorname = '';
  }

  uploadFinished = (event: any) => {
    this.response = event;
  }
  getAllActiveAuthors() {

    this.service.getAllActiveAuthor().subscribe({
      next: (res) => {
        //alert("Author deactivated successfully");
        console.log(res);
        this.authorsList = res;
      },
      error: (err) => {
        console.log(err);
        alert("Error while Loading the author to drop down");
      }

    });
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:7216/${serverPath}`;
  }
}
