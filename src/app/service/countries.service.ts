
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface CountryData {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  currencies: string[];
  languages: string[];
}

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) {}

  buscarPais(nome: string): Observable<CountryData> {
    return this.http.get<any[]>(`${this.apiUrl}${nome}?fullText=true`).pipe(
      map(res => {
        if (!res || res.length === 0) {
          throw new Error('País não encontrado');
        }

        const country = res[0];
        return {
          name: country.name.common,
          capital: country.capital ? country.capital[0] : 'Não informado',
          region: country.region,
          population: country.population,
          flag: country.flags.png,
          currencies: country.currencies ? Object.keys(country.currencies) : [],
          languages: country.languages ? Object.values(country.languages) as string[] : []
        };
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          return throwError(() => new Error('País não encontrado'));
        }
        return throwError(() => new Error('Erro ao consultar o país. Tente novamente.'));
      })
    );
  }
}