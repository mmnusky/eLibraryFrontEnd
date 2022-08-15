import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7216/api/v1';
  private listStatus = new BehaviorSubject<any>('');
  listStatusObserver = this.listStatus.asObservable();

  private adminRole = new BehaviorSubject<any>('');
  adminRoleObservable = this.adminRole.asObservable();

  private addBook = new BehaviorSubject<any>('');
  addBookObservable = this.addBook.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllBook() {
    return this.httpClient.get(`${this.baseUrl}/BookDetails/GetBookDetails`);
  }
  uploadImage(data: any) {
    return this.httpClient.post(`${this.baseUrl}/BookDetails/InserBookDetails`, data, { reportProgress: true, observe: 'events' })
  }
  insertBookData(data: any) {
    return this.httpClient.post(`${this.baseUrl}/BookDetails/InserBookDetails`, data, { headers: this.setHeaders() })
  }

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Account/Register`, data)
  }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Account/Login`, data)
  }

  logout(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Account/LogOut`, data)
  }
  getAllAuthors() {
    return this.httpClient.get(`${this.baseUrl}/Role/GetAllAuthor`, { headers: this.setHeaders() })
  }
  deletebook(id: any) {
    return this.httpClient.get(`${this.baseUrl}/BookDetails/DeleteBookDetails/` + id)///" + id
  }

  changestatus(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Role/DeactivateAuthor`, data, { headers: this.setHeaders() })
  }
  getAllActiveAuthor() {
    return this.httpClient.get(`${this.baseUrl}/Role/GetAllActiveAuthor`, { headers: this.setHeaders() })
  }
  //observable
  statusUpdate(data: any) {

    this.listStatus.next(data);

  }
  roleCheck(data: any) {

    this.adminRole.next(data);

  }
  roleOrAdminCheck(data: any) {
    this.addBook.next(data);
  }
  handle(token: any) {
    this.set(token);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  remove() {
    localStorage.removeItem('token');
  }
  setHeaders() {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    }

    return headers;
  }
}
