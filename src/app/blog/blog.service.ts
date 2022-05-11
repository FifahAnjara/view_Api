import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BlogService {
  constructor(private _http: HttpClient) {}

  getUsers() {
    this._http.get('http://localhost/ged/public/api/personnels/Allpers');
    map((res: { json: () => any }) => res.json());
  }
}
