import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs';
import { Personel } from '../model/model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  private personelUrl = 'http://localhost/ged/public/api/personnels'; //Base URL REST API

  constructor(private http: HttpClient) {}

  /*Get Personnels from the server */
  /**"donner" == cles ana valeur any anaty backend  */
  getPersonels(): Observable<{ donner: Personel[] }> {
    return this.http.get<{ donner: Personel[] }>(this.personelUrl + '/Allpers');
  }

  /**Get personel by mat.  */
  getPersonel(mat: string | null): Observable<any> {
    const url = `${this.personelUrl}/perso/${mat}`;
    return this.http.get<{
      status: number;
      data: {};
    }>(url);
  }
}
