import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = 'api/books';

  constructor(private httpClient: HttpClient) { }

  bookList(){
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first()
    );
  }
}
