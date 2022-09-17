import { Injectable } from '@angular/core';
import { Ship, ShipResponse } from '../Ship';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsServiceService {
	url = 'https://swapi.dev/api/'
  constructor(private http: HttpClient) { }

  getShips(): Observable<ShipResponse> {
	// this.url + 'starships'
	// this.url ='https://swapi.dev/api/'
	// 'https://swapi.dev/api/' + 'starships'
	return this.http.get<ShipResponse>(this.url + 'starships');
	}
}
