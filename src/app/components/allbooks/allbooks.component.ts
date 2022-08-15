import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Interfaces/book.model';
import { BookToCreate } from 'src/app/Interfaces/bookToCreate.model';
//import { Book } from 'src/app/book';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.component.html',
  styleUrls: ['./allbooks.component.css']
})
export class AllbooksComponent implements OnInit {
  book!: BookToCreate;
  books: Book[] = [];
  searchTerm!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers = () => {
    this.dataService.getAllBook()
      .subscribe({
        next: (res) => this.books = res as Book[],
        error: (err: HttpErrorResponse) => console.log(err)
      });
    console.log(this.books);
  }
  deleteProduct(id: any) {
    console.log(id);
    this.dataService.deletebook(id).subscribe({
      next: (res) => {
        alert("Product deleted successfully");
        this.getUsers();
      },
      error: () => {
        alert("Error while deleting data");
      }
    });
  }
  // getBooksData() {
  //   // console.log('Hello Books');
  //   this.dataService.getAllBook().subscribe(res => {
  //     // console.log(res);
  //     let resData: any = res;
  //     this.books = resData.books.data;
  //   });
  // }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:7216/${serverPath}`;
  }



}
