import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http'
import 'rxjs/add/operator/map'
@Injectable()
export class ApiService {

  constructor(private http:Http) {
    
   }
   addWarehouseEntry(details){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/warehouse/add',details,{headers:headers}).map(res=>res.json())
  }
  addCollectionEntry(details){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/collection/add',details,{headers:headers}).map(res=>res.json())
  }
  getData(id){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/getStatus',id,{headers:headers}).map(res=>res.json())
  }
  dataProvenance(id){
    let headers=new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post('/api/provenance',id,{headers:headers}).map(res=>res.json())
  }
  
}
