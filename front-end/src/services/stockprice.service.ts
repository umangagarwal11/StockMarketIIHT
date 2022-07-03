import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { StockPrice } from "src/model/StockPrice";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class StockPriceService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8080/stockprice';
  }


  addStockPriceList(stockPrices: StockPrice[]) {
    console.log("adding");
    this.httpClient.post<StockPrice[]>(this.url, stockPrices)
      .subscribe(response => response);
  }
  getStockPrices(): Observable<StockPrice[]> {
    return this.httpClient.get<StockPrice[]>(this.url);
  }

}
