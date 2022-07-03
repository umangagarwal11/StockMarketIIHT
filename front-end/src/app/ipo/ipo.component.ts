import { Component, OnInit } from '@angular/core';
import { StockExchangeService } from 'src/services/stockExchange.service';
import { StockExchange } from 'src/model/StockExchange';
import { Ipo } from 'src/model/Ipo';
import { IpoService } from 'src/services/ipo.service';
import { CompanyService } from 'src/services/company.service';
import { Company } from 'src/model/Company';
@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent {
  public formData: Ipo={
    id:0,
    companyName:'',
    stockExchange:'',
    totalShares:'',
    openDate: '',
    openTime: '',
    price:'',
    remarks:''
  };
  comp:Company[];
  stockex:StockExchange[];
  ipos:Ipo[];
  submitted:boolean;
  constructor(private ipoService: IpoService, private stockExchangeService:StockExchangeService,private companyService:CompanyService) {
    this.companyService.getCompanies().subscribe(response => {this.comp=response});
    this.stockExchangeService.getStockExchanges().subscribe(response => {this.stockex=response});
    this.submitted=false;
  }
  ngOnInit(): void{
    this.ipoService.getIpos().subscribe(response => {this.ipos=response});

  }
  onSubmit()
  {
    this.ipoService.addIpo(this.formData);
    this.submitted=true;
    console.log("out");
  }
  onDelete(data)
  {
    this.ipoService.deleteIpo(data);
  }
  onEdit(data)
  {
    this.ipoService.editIpo(data);
  }

}
