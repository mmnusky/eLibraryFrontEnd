import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:7216/api/v1';
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(`${this.baseUrl}/GetBookDetails`);
  }

  insertData(data: any) {
    return this.httpClient.post(`${this.baseUrl}/InsertBookDetails`, data)
  }

  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Register`, data)
  }

  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/Login`, data)
  }

  logout(data: any) {
    return this.httpClient.post(`${this.baseUrl}/LogOut`, data)
  }

  getAuthorsBook() {
    return this.httpClient.get(`${this.baseUrl}/book?limit=10&page=1`)
  }

  getAllAuthors() {
    return this.httpClient.get(`${this.baseUrl}/authors`)
  }

  changestatus(data: any) {
    return this.httpClient.get(`${this.baseUrl}/DeactivateAuthor`, data)
  }

  handle(token: any) {
    this.set(token);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }


  payload(token: any) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any) {
    return JSON.parse(atob(payload));
  }




}
