import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<InstrumentApi[]>('/api', this.httpOptions);
  }

  add(instrument: InstrumentApi): Observable<any> {
    this.httpOptions.headers.append('responseType', 'text');
    return this.http.post('/api/add-instrument', instrument, this.httpOptions);
  }

  remove(instrumentId: number): Observable<any> {
    const body = { instrumentId };
    return this.http.post<InstrumentApi[]>('/api/remove-instrument', body, this.httpOptions);
  }
}
