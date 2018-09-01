import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { CollectionComponent } from './components/collection/collection.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataComponent } from './components/data/data.component'


import {ApiService} from './services/api.service';

const routes:Routes =[
  {path:'collection',component:CollectionComponent},
  {path:'customer',component:CustomerComponent},
  {path:'warehouse',component:WarehouseComponent},
  {path:'provenance',component:DataComponent},
  {path:'',redirectTo:'/warehouse',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    CollectionComponent,
    CustomerComponent,
    NavigationComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
