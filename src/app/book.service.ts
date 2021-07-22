import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  url : string = 'https://60b9eb5380400f00177b7346.mockapi.io/mockdata/book'

  constructor(private http : HttpClient) { }

  fetchAll(){
    return this.http.get<IBook[]>(this.url)
  }

  fetchOne(id : number){
    return this.http.get<IBook>(`${this.url}/${id}`)
  }


  create(data : IBook) : Observable<IBook>{
    return this.http.post<IBook>(this.url,data)
  }

  remove(id : number | undefined) : Observable<IBook>{
    return this.http.delete<IBook>(`${this.url}/${id}`)
  }

  update(id : number,data : IBook) : Observable<IBook>{
    return this.http.put<IBook>(`${this.url}/${id}`,data)
  }

}
