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
    return this._http
      .get('http://localhost/ged/public/api/personnels/Allpers')
      .pipe(map((res: any) => res.json()));
    // map((res: { json: () => any }) => res.json());
  }
}
