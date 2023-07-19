import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerSummaryComponent } from './components/customer-summary/customer-summary.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderInfoComponent } from './components/order-info/order-info.component';
import { ProductSummaryComponent } from './components/product-summary/product-summary.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ReportsComponent } from './components/reports/reports.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuickshopService } from './services/quickshop.service';
import { UtilitiesService } from './services/utilities.service';
import { QuickshopMaterialModule } from './modules/quickshop-material.module';
import { QuickshopPrimeNGModule } from './modules/quickshop-primng.module';
import { HttpClientModule } from '@angular/common/http';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CategoryInfoComponent } from './components/category-info/category-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSummaryComponent,
    CustomerInfoComponent,
    OrderSummaryComponent,
    OrderInfoComponent,
    ProductSummaryComponent,
    ProductInfoComponent,
    ReportsComponent,
    DashboardComponent,
    SettingsComponent,
    ProductCategoryComponent,
    CategoryInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    QuickshopMaterialModule,
    QuickshopPrimeNGModule,
    HttpClientModule
  ],
  providers: [QuickshopService, UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
