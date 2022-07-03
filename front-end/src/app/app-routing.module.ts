import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CreateComponent } from './create/create.component';
import { EmptyComponent } from './empty/empty.component';
import { IpoComponent } from './ipo/ipo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectorComponent } from './sector/sector.component';
import { StockpriceComponent } from './stockprice/stockprice.component';

const routes: Routes = [
  {path:"create-stockex", component:CreateComponent},
  {path:"company",component:CompanyComponent},
  {path:"sector",component:SectorComponent},
  {path:"ipo",component:IpoComponent},
  {path:"stock-price",component:StockpriceComponent},
  {path:"nav-bar",component:NavbarComponent},
  {path:"home",component:AppComponent},
  {path:"empty",component:EmptyComponent},
  {path:"", redirectTo:'AppComponent', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
