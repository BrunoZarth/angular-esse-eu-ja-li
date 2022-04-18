import { BookService } from './service/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(bookService: BookService) {
    this.books$ = bookService.bookList().pipe(
      catchError((error) => {
        console.log(error)
        return of([]);
      })
    );
  }

  ngOnInit() {}
}
