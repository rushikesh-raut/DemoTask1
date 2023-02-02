import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpserService } from 'src/app/TOdoServ/httpser.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  constructor(private service:HttpserService,private fb:FormBuilder) { }
  form = this.fb.group({
    note :[''],
    date:['']
  })
  ngOnInit(): void {this.fetachdeta()
  
  // var color:any= ['red','green','yellow', 'orange','pink','nevy','blue']
  // var i=0 ;
  // document.querySelector('button')?.addEventListener('click',
  // function(){
  //   i = 1< color.length ? ++i:0
  //  color.document.querySelector('list').Style.background = color[i]
  // })
  //not work this functinality for multiple color
  }

  add(){
    let obj = {note : this.form.value.note , Date:this.form.value.date , id:''}
  
  this.service.postdeta(obj).subscribe(el=>{
    console.log(el)
    this.fetachdeta()
    this.form.reset()
  })
  }
  userdeta:any
  fetachdeta(){
    this.service.acceptdeta().subscribe(req=>{
  this.userdeta=req
    })
  }
  
  enduser:any
  edit(item:any){
    this.form.patchValue({
     note : item.note,
     date :item.date
    })
    this.enduser=item
  }
  
  update()
  {
    let obj = {note : this.form.value.note , Date:this.form.value.date , id:this.enduser.id}
    
    this.service.updatedeta(this.enduser.id,obj).subscribe(el=>{
      console.log(el)
      this.fetachdeta()
      this.form.reset()
    })
  }
  
  
  deleteuserdeta(item:any)
  {
  this.service.deletedeta(item.id).subscribe(el=>{
    console.log(el)
    this.fetachdeta()
  })
  }
  
  
  }
  
