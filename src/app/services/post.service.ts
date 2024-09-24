import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';

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
