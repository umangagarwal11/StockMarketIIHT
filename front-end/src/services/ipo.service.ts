import { Ipo } from "src/model/Ipo";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class IpoService{
  private url:string;
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:8080/ipo';
  }
  addIpo(ipo:Ipo){
    this.httpClient.post<Ipo>(this.url,ipo).subscribe(response => response);

  }
  getIpos(): Observable<Ipo[]> {
    return this.httpClient.get<Ipo[]>(this.url);
  }
  getIpo(id: string): Observable<Ipo> {
    return this.httpClient.get<Ipo>(this.url + id);
  }
  deleteIpo(id: string) {
    this.httpClient.delete(this.url +'/'+ id)
      .subscribe(response => response);

  }
  editIpo(ipo:Ipo){
    this.httpClient.put<Ipo>(this.url,ipo).subscribe(response => response);

  }
}
