import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.local';
import Swal from 'sweetalert2';

@Injectable({
	providedIn: 'root'
})
export class EuroService {
	

	private url: String = environment.url;

	private httpHeaders = new HttpHeaders({
		'Access-Control-Allow-Origin': '*',
	});

	constructor(
		private http: HttpClient,
		private router: Router
	) { }




	public getNewBetWithNumber(reqNumber: String): Observable<any> {
		return this.http.get(this.url + "getWithNumber?number=" + reqNumber, { headers: this.httpHeaders }).pipe(
			map((response: any) => response),
			catchError(e => {
				if (e.status == 400) {
					return throwError(e);
				}
				console.error(e.error.message);
				return throwError(e);
			})
		);
	}


	public getNewBetWithSumm(summNumber: String): Observable<any> {
		return this.http.get(this.url + "getBetWithSum?sum=" + summNumber, { headers: this.httpHeaders }).pipe(
			map((response: any) => response),
			catchError(e => {
				if (e.status == 400) {
					return throwError(e);
				}
				console.error(e.error.message);
				return throwError(e);
			})
		);
	}

}
