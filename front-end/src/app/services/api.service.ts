import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class ApiService {

  constructor(private http:Http) {
    
   }
   addWarehouseEntry(){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/warehouse/add',{headers:headers}).map(res=>res.json())
  }
  addCollectionEntry(){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/collection/add',{headers:headers}).map(res=>res.json())
  }
  getData(){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/getStatus',{headers:headers}).map(res=>res.json())
  }
  
}
