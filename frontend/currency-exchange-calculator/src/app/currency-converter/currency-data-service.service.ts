import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRate } from './currency-data.interface';

@Injectable({
  providedIn: 'root',
})
export class CurrencyDataServiceService {
  private apiUrl = 'http://localhost:3000/currencyRates'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getCurrencyRates(): Observable<CurrencyRate[]> {
    return this.http.get<CurrencyRate[]>(this.apiUrl);
  }
}
