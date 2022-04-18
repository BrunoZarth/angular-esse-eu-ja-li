import { Book } from './../model/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  bookList(): Book[]{
    return [

    ];
  }
}
