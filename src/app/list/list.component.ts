import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.fetchAll().subscribe(data => {
      this.books = data;
    })
  }

  onRemoveBook(id: number | undefined) {
    this.bookService.remove(id).subscribe(data => {
      this.books = this.books.filter(item => item.id != id);
    })
  }

}
