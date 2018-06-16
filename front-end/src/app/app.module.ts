import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import {ApiService} from './services/api.service'

const routes:Routes =[
  {path:'collection',component:CollectionComponent},
  {path:'customer',component:CustomerComponent},
  {path:'',component:WarehouseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    CollectionComponent,
    CustomerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
