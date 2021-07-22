import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  book: IBook = {
    author: '',
    desc: '',
    price: 0,
    title: ''
  }
  constructor(
    private router : Router,
    private bookService: BookService,
    private activated: ActivatedRoute) { }

  ngOnInit(): void {
    this.activated.paramMap.subscribe(params => {
      const id : any = params.get("id");
      this.bookService.fetchOne(id).subscribe(data => {
        this.book = data;
      })
    })
  }
  onSubmit() {
    this.bookService.update(this.book.id as number,this.book).subscribe(data => {
      this.router.navigate(['/list'])
    })
  }
}
