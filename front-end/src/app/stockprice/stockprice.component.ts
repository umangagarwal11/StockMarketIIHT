import { Component, OnInit } from '@angular/core';
import { StockPrice } from 'src/model/StockPrice';
import { StockPriceService } from 'src/services/stockprice.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-stockprice',
  templateUrl: './stockprice.component.html',
  styleUrls: ['./stockprice.component.css']
})
export class StockpriceComponent implements OnInit {

  data: any;
  file: any;
  title: any;
  arrayBuffer: any;
  filelist: any;
  isUploaded : boolean =false;
  sp : StockPrice;
  slist : StockPrice[]=[];
  sps:StockPrice[];
  constructor(private stockPriceService: StockPriceService) { }
  ngOnInit():void {
    this.stockPriceService.getStockPrices().subscribe(response => {this.sps=response});
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    this.file= evt.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
      let arraylist:any[] = XLSX.utils.sheet_to_json(worksheet,{raw:true});
      //console.log("list new",arraylist);
      this.filelist = [];
      this.isUploaded = true;
      //console.log(this.filelist)



      arraylist.filter(record =>{
        if(record.companyCode==undefined || record.stockExchangeName==undefined || record.price==undefined || record.date==undefined || record.time==undefined)
        {
          console.log(parseInt(record.companyCode));
          return false;
        }
        return true;
      }).map(record => {
        console.log("inside");
        record.companyCode = parseInt(record.companyCode.trim());
        record.stockExchangeName = record.stockExchangeName.trim();
        record.price = parseFloat(record.price);
        record.date = new Date(record.date);
        record.time = record.time;
        this.slist.push(<StockPrice> record);

         });
      console.log("list");
      this.stockPriceService.addStockPriceList(this.slist);






        }
      }



}
