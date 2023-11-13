import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import CDBResults from '../models/CDBResults';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'any' })
export default class CalcCDBService {
  public API = 'http://localhost:8080/api';
  public CALC_CDB_API = `${this.API}/CalcCDB`;

  constructor(private http: HttpClient) { }

  calcCdb(initialValue: number, months: number): Observable<CDBResults> {

    var data = this.http.get<CDBResults>(`${this.CALC_CDB_API}/${initialValue}/${months}`);
    console.log(data)
    return data
  }

}
