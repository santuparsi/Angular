import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'src/model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    // perform the appropriate API call here that will get the books from the server
  }

  addBook(book: Book): Observable<Book> {
    // perform the appropriate API call here that will add a book to the server
  }
}
