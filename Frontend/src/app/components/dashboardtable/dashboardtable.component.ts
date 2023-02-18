import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboardtable',
  templateUrl: './dashboardtable.component.html',
  styleUrls: ['./dashboardtable.component.css']
})
export class DashboardtableComponent {
  productForm=new FormGroup({
    title:new FormControl('',[]),
    price:new FormControl('',[]),
    quantity:new FormControl('',[]),
    description:new FormControl('',[]),
    image:new FormControl('',[]),
    categories:new FormControl('',[]),
    smallDescription:new FormControl('',[]),
  })
  updateproduct(e:any){
    e.preventDefault();
    //console.log(this.productForm)
    if(this.productForm.status=="VALID")
      console.log(this.productForm.value)
  }
  base64:any;
getImagePath(e:any){
  //script to get base64
    const file =e.target.files[0]
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      this.base64=reader.result
      //console.log(this.base64)
    }
  }
}
