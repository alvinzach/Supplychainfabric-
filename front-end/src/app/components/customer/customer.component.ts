import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  id=''
  result:any
  loading:boolean=false
  success:boolean=false
  failure:boolean=false
  location:string
  status:string
  constructor( private api : ApiService) { }

  ngOnInit() {
  }
  submit(){
    this.loading=true;
    this.success=false;
    this.failure=false;
    this.api.getData({id:this.id}).subscribe(data=>{
      this.result=JSON.stringify(data)
      console.log(data)
      if(data.success){
        this.success=true
        this.location=JSON.parse(this.result).message.location
        this.status=JSON.parse(this.result).message.status
      }else{
        this.failure=true
      }
      this.loading=false;
    })
  }
}
