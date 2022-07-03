import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {StockExchange} from "../model/StockExchange";
import { Observable } from "rxjs";
@Injectable({providedIn:'root'})
export class StockExchangeService{
  private url:string;
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:8080/stockexchange';
  }
  addStockExchange(stockExchange:StockExchange){
    this.httpClient.post<StockExchange>(this.url,stockExchange).subscribe(response => response);
    console.log(stockExchange);
  }
  getStockExchanges(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.url);
  }
  getStockExchange(id: string): Observable<StockExchange> {
    return this.httpClient.get<StockExchange>(this.url + id);
  }
  deleteStockExchange(id: string) {
    this.httpClient.delete(this.url + '/'+ id)
      .subscribe(response => response);

  }
  editStockExchange(stockExchange:StockExchange){
    this.httpClient.put<StockExchange>(this.url,stockExchange).subscribe(response => response);

  }
}
