import { Sector } from "src/model/Sector";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class SectorService{
  private url:string;
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:8080/sector';
  }
  addSector(sector:Sector){
    this.httpClient.post<Sector>(this.url,sector).subscribe(response => response);

  }
  getSectors(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(this.url);
  }
  getSector(id: string): Observable<Sector> {
    return this.httpClient.get<Sector>(this.url + id);
  }
  deleteSector(id: string) {
    this.httpClient.delete(this.url +'/'+ id)
      .subscribe(response => response);

  }
  editSector(sector:Sector){
    this.httpClient.put<Sector>(this.url,sector).subscribe(response => response);

  }
}
