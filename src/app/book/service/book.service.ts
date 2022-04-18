import { Book } from './../model/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  bookList(): Book[]{
    return [
      {
        title: 'string',
        pages: 200,
        author: 'string',
        description: 'string'
      }
    ];
  }
}
