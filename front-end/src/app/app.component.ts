import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {StockExchange} from "../model/StockExchange";
import {StockExchangeService} from "../services/stockExchange.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'stockex';
  
  constructor(private router:Router){

  }
  ngOnInit(): void{
  

  }
  




}
