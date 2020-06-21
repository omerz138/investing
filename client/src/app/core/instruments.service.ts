import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { InstrumentApi } from '../models/instrument.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstrumentsService {
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<InstrumentApi[]> {
    return this.http.get<InstrumentApi[]>('/api/instrument', this.httpOptions);
  }

  add(instrument: InstrumentApi): Observable<any> {
    this.httpOptions.headers.append('responseType', 'text');
    return this.http.post('/api/instrument', instrument, this.httpOptions);
  }

  remove(instrumentId: string): Observable<any> {
    const httpParams = new HttpParams().set('instrumentId', instrumentId);
    const deleteHttpOptions = { ...this.httpOptions, params: httpParams };
    return this.http.delete<InstrumentApi[]>('/api/instrument', deleteHttpOptions);
  }
}
