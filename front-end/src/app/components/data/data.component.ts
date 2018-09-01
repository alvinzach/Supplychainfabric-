import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  id=''
  status=''
  result:any
  loading:boolean=false
  success:boolean=false
  failure:boolean=false
  constructor( private api : ApiService) { }

  ngOnInit() {
  }
  submit(){
    this.loading=true;
    this.success=false;
    this.failure=false;
    this.api.dataProvenance({id:this.id}).subscribe(data=>{
      this.result=JSON.stringify(data.message)
      console.log(data)
      if(data.success){
        this.success=true
      }else{
        this.failure=true
      }
      this.loading=false;
    })
  }

}
