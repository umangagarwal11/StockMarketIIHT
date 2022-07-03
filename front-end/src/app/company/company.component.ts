import { Component, OnInit } from '@angular/core';
import { Company } from 'src/model/Company';
import { CompanyService } from 'src/services/company.service';
import { StockExchange } from 'src/model/StockExchange';
import { StockExchangeService } from 'src/services/stockExchange.service';
import { SectorService } from 'src/services/sector.service';
import { Sector } from 'src/model/Sector';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  stockex:StockExchange[];
  sectors:Sector[];
  public formData: Company={
    companyId:'',
    companyName:'',
    ceo:'',
    turnover:'',
    listedInStockExchanges:'',
    boardOfDirectors:'',
    sector:'',
    companyDescription:''
  };
  companies:Company[];
  submitted:boolean;
  constructor(private companyService: CompanyService,private stockExchangeService:StockExchangeService,private sectorService:SectorService) {
    this.submitted=false;
    this.stockExchangeService.getStockExchanges().subscribe(response => {this.stockex=response});
    this.sectorService.getSectors().subscribe(response => {this.sectors=response});
  }
  ngOnInit(): void{
    this.companyService.getCompanies().subscribe(response => {this.companies=response});

  }
  onSubmit()
  {
    this.companyService.addCompany(this.formData);
    this.submitted=true;
    console.log("out");
  }
  onDelete(data)
  {
    this.companyService.deleteCompany(data);
  }
  onEdit(data)
  {
    this.companyService.editCompany(data);
  }

}
