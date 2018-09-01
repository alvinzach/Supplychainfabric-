import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
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
    this.api.addCollectionEntry({id:this.id,status:this.status}).subscribe(data=>{
      this.result=JSON.stringify(data)
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
 