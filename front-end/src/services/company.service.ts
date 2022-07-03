import { Injectable} from "@angular/core";
import { Company} from "src/model/Company";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class CompanyService{
  private url:string;
  constructor(private httpClient:HttpClient) {
    this.url='http://localhost:8080/company';
  }
  addCompany(company:Company){
    this.httpClient.post<Company>(this.url,company).subscribe(response => response);

  }
  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url);
  }
  getCompany(id: string): Observable<Company> {
    return this.httpClient.get<Company>(this.url +'/'+ id);
  }
  deleteCompany(id: string) {
    this.httpClient.delete(this.url + '/'+id)
      .subscribe(response => response);

  }
  editCompany(company:Company){
    this.httpClient.put<Company>(this.url,company).subscribe(response => response);

  }
}
