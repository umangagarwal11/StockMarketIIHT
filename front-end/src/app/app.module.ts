import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { SectorComponent } from './sector/sector.component';
import { IpoComponent } from './ipo/ipo.component';
import { StockpriceComponent } from './stockprice/stockprice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmptyComponent } from './empty/empty.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CompanyComponent,
    SectorComponent,
    IpoComponent,
    StockpriceComponent,
    NavbarComponent,
    EmptyComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatTabsModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule{}


