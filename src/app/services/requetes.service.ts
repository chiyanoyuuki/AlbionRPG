import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequetesService 
{
  constructor(private http: HttpClient) { }

  getJoueurs() : Observable<any>{
    return this.http.get<any>('https://www.chiya-no-yuuki.fr/getJoueurs');
  }
}
