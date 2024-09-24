import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  private apiUrl = 'https://www.fruityvice.com/api/fruit/apple/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPostsData() {
    this.http.get(this.apiUrl).subscribe(
      (posts) => {
        return posts;
      },
      (error) => {
        console.error(error);
        return [];
      }
    );
  }
}
