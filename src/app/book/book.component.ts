import { BookService } from './service/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Book[] = [];

  constructor(bookService: BookService) {
    this.books = bookService.bookList();
  }

  ngOnInit() {
  }

}
