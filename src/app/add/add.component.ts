import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  book : IBook = {
    author : '',
    desc : '',
    price : 0,
    title : ''
  }
  constructor(
      private router : Router,
      private bookService : BookService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.book);
    this.bookService.create(this.book).subscribe(data => {
      this.router.navigate(['/list'])
    })
  }
}
