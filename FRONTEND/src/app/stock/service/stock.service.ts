import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IStock } from '../stock-list/stock-list.interface';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  API_URL: string = 'http://localhost:3000';

  constructor(private readonly httpClient:HttpClient) { }

  getStocks(): Observable<IStock[]> {
    return this.httpClient.get<IStock[]>(`${this.API_URL}/stock`)
  }

  getStockById(id:number): Observable<IStock> {
    return this.httpClient.get<IStock>(`${this.API_URL}/stock/${id}`)
  }

  CreateStock(stock: IStock): Observable<IStock> {
    return this.httpClient.post<IStock>(`${this.API_URL}/stock/create`,stock)
  }

  deleteStock(id:number): Observable<IStock> {
    return this.httpClient.delete<IStock>(`${this.API_URL}/stock/delete?Id=${id}`)
  }
}
