import { Component, OnInit } from '@angular/core';
import { StockExchange } from 'src/model/StockExchange';
import { StockExchangeService } from 'src/services/stockExchange.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  public formData: StockExchange={
    stockExchangeId:'',
    name:'',
    description:'',
    address:'',
    remarks:''
  };
  stockExchanges:StockExchange[];
  submitted:boolean;
  constructor(private stockExchangeService: StockExchangeService) {
    this.submitted=false;
  }
  ngOnInit(): void{
    this.stockExchangeService.getStockExchanges().subscribe(response => {this.stockExchanges=response});

  }
  onSubmit()
  {
    this.stockExchangeService.addStockExchange(this.formData);
    this.submitted=true;
    console.log("out");
  }
  onDelete(data)
  {
    this.stockExchangeService.deleteStockExchange(data);
  }
  onEdit(data)
  {
    this.stockExchangeService.editStockExchange(data);
  }





}
